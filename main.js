import { Configuration, OpenAIApi } from "https://cdn.skypack.dev/openai"

document.querySelector("#send").addEventListener("click", function () {
    var template = 
        `<div class="line">
            <span class="chat myChat">${document.querySelector("#input").value}</span>
        </div>`
    document.querySelector(".chatContent").insertAdjacentHTML("beforeend", template)
})

window.addEventListener("keydown", e => {
  console.log(e)
})


const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

openai.createCompletion({
  model: "text-davinci-003",
  prompt: "hello",
  temperature: 0.5,
  max_tokens: 60,
  top_p: 1,
  frequency_penalty: 0.5,
  presence_penalty: 0,
}).then((result) => {
    console.log(result.data)
})