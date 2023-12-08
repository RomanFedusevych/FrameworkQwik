import {$, component$, useStore} from "@builder.io/qwik";
import {IAiMessageWindow} from "~/interfaces/IAiInterface";
import {IconMicrophone} from "~/components/IconComponents/IconMicrophone";
import {IconPaperclip} from "~/components/IconComponents/IconPaperclip";
import {IconSubmit} from "~/components/IconComponents/IconSubmit";
import {IconUser} from "~/components/IconComponents/IconUser";

export const MessageWindow = component$((props:IAiMessageWindow) => {
    const {isChatOpen} = props;
    const state = useStore({
        text: '',
        inputHeight: 0,
        inputLength: 21,
        previousScrollHeight: 36,
        wasEmpty: false,
        inputWidth: 0,
        textWidth: 0,
        messages: [],
    })

    const handleInputChange = $((event: InputEvent) => {
        const {value, scrollHeight} = (event.target as HTMLInputElement);
        const inputValue = value;
        state.text = inputValue;

        const lineHeight = 20;

        if (inputValue.length === 0) {
            state.inputHeight = 0;
            state.wasEmpty = true;
        } else {
            if (state.wasEmpty) {
                state.previousScrollHeight = scrollHeight;
                state.wasEmpty = false;
            } else {
                if (scrollHeight < 116) {
                    const scrollHeightDiff = scrollHeight - state.previousScrollHeight;
                    if (scrollHeightDiff > lineHeight / 2) {
                        state.previousScrollHeight = scrollHeight;
                        state.inputHeight += lineHeight;
                    } else if (scrollHeightDiff < -lineHeight / 2 && scrollHeight > 36) {
                        state.previousScrollHeight = scrollHeight;
                        state.inputHeight -= lineHeight;
                    }
                }
            }
        }
    });

    const onMessageSend = $(() => {
        (state.messages as string[]).push(state.text);
        state.text = "";
        state.inputHeight = 0;
    });

    return (
        <div class={`${isChatOpen ? 'h-[347px]' : 'h-[0]'} transition-height duration-500 ease-in-out flex justify-center items-center custom-bg-border rounded-3xl w-[390px]`}>
            <div class={`${isChatOpen ? 'h-[344px]' : 'h-[0]'} transition-height duration-500 ease-in-out w-[388px] custom-bg-gradient flex-shrink-0 rounded-3xl shadow-custom-shadow`}>
                <div class={"flex justify-center items-center flex-col pb-2.5"}>
                    <div class={`${isChatOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ease-in-out min-h-[275px] w-full flex flex-col justify-end text-right px-[45px]`}>
                        {state.messages.map((message, i) => {
                            return (
                              <div class={"w-full h-full text-customColorForText justify-end flex gap-2 mb-[12px]"} key={i}>
                                  {message}
                                  <IconUser />
                              </div>
                            );
                        })}
                    </div>
                    <div
                        style={{height: state.inputHeight + 47}}
                        class={`w-[310px] ${isChatOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ease-in-out flex justify-between px-3 items-end py-1.5 rounded-lg bg-gray-700 absolute right-[38px] bottom-[10px]`}>
                        <button class={"flex items-center justify-center max-w-[24px] h-[38px] rounded-xl"}>
                            <IconPaperclip />
                        </button>
                        <textarea
                            onInput$={handleInputChange}
                            value={state.text}
                            style={{height: state.inputHeight + 36}}
                            class={`bg-customGray rounded-lg pt-1 pb-1 pl-2.5 pr-2.5 text-[#DEDEDE] text-base font-normal focus:outline-none custom-font-family custom-line-height resize-none`}></textarea>
                        <button onClick$={onMessageSend} class={"flex items-center justify-center bg-customButtonColor min-w-[36px] h-[36px] rounded-xl"}>
                            {!state.text.length ? <IconMicrophone /> : <IconSubmit />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});
