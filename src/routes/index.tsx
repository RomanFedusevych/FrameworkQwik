import {component$} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {AiModal} from "~/components/modals/AiModal/AiModal";

export default component$(() => {
  return (
    <>
      <AiModal />
    </>
  );
});

export const head: DocumentHead = {
  title: "Ai modal",
  meta: [
    {
      name: "description",
      content: "Ai modal",
    },
  ],
};
