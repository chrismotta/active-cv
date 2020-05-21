import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "Christian Motta",
    api_url: "/mocks/works.json",
  },
});

export default app;
