import {$, component$, useStore} from "@builder.io/qwik";
import {MessageWindow} from "~/components/modals/AiModal/MessageWindow";

export const AiModal = component$(() => {
    const state = useStore({
        isAiPressed: true,
        isChatOpen: false,
        isMutePressed: false
    });

    const onAiClick = $(() => {
        state.isAiPressed = !state.isAiPressed;
        state.isChatOpen = false;
    });

    const openChat =$(() => {
        state.isChatOpen = !state.isChatOpen;
    });

    const onMutePressed = $(() => {
        state.isMutePressed = !state.isMutePressed;
    });

    return (
        <div class="flex bg-uwpBcGround bg-cover bg-center bg-no-repeat relative h-screen overflow-hidden">
            <div class={`flex justify-center items-center absolute right-[268px] bottom-20`}>
                <button
                    onClick$={onAiClick}
                    class={`transition-transform-opacity ${state.isAiPressed ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} duration-500 ease-in-outs bg-mainCircle bg-no-repeat bg-center w-[124px] h-[124px] mb-5 mix-blend-lighten`}
                >
                </button>
            </div>
            <div class={`${state.isAiPressed ? 'opacity-0' : 'opacity-100'} flex justify-center items-center absolute right-[138px] ${state.isChatOpen ? 'bottom-20' : '-bottom-[185px]'} transition-bottom`}>
                <div class={"relative w-[390px] h-[347px]"}>
                    <div class={"absolute -top-[63px] right-[38px] z-10 flex justify-center items-end bg-modalBlock bg-no-repeat bg-center w-[310px] h-[102px] mb-5"}>
                        <div class={"flex justify-between items-center w-[280px]"}>
                            <button onClick$={onMutePressed} class={`${state.isMutePressed ? 'bg-off' : 'bg-onButton'} w-[86px] h-[38px]`}></button>
                            <button onClick$={onAiClick} class={"bg-ai w-[62px] h-[64px] mix-blend-lighten ml-0.5 mb-2"}></button>
                            <button class={"bg-UA w-[36px] h-[37px]"}></button>
                            <button onClick$={openChat} class={`${state.isChatOpen ? 'bg-up' : 'bg-down'} w-[36px] h-[36px]`}></button>
                        </div>
                    </div>
                    <MessageWindow isChatOpen={state.isChatOpen}/>
                </div>
            </div>
        </div>
    );
});