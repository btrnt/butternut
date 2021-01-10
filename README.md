# butternut 
## `buh·tr·nuht` -- `bot or not?`

Is what you're reading online written by a human, or AI? Do the facts hold up? `butternut`is a chrome extension that leverages state-of-the-art text generation models *to combat* state-of-the-art text generation. 




## How it works
Butternut is built off the GLTR paper [https://arxiv.org/abs/1906.04043](https://arxiv.org/abs/1906.04043). It takes any text input and then finds out what a text generating model *would've* predicted at each word/token. This array of every single possible prediction and their related probability is crossreferenced with the input text to determine the 'rank' of each token in the text: where on the list of possible predictions was the token in the text.

![backend_overview](https://github.com/btrnt/butternut/raw/main/butternut_backend_diagram.png)

Text with consistently high ranks are more likely to be AI-generated because current AI-generated text models all work by selecting words/tokens that have the highest probability given the words before it. On the other hand, human-written text tends to have more variety.

Here are some screenshots of butternut in action with some different texts. Green highlighting means predictable while yellow and red mean unlikely and more unlikely, respectively.

Example of human-generated text:
![human_image](an_url)


Example of GPT text:
![gpt_text)(another_url)


For more details on how GLTR works please check out their paper. It's a good read. https://arxiv.org/abs/1906.04043

## Tech Stack Choices
Two backends are defined in the [butternut backend repo](https://github.com/btrnt/butternut_backend). The salesforce CTRL model is used for butternut.


1. GPT-2: GPT-2 is a well-known general purpose text generation model and is included in the GLTR team's [demo repo](https://github.com/HendrikStrobelt/detecting-fake-text)
2. Salesforce CTRL: [Salesforce CTRL](https://github.com/salesforce/ctrl) (1.6 billion parameter) is bigger than all GPT-2 varients (117 million - 1.5 billion parameters) and is purpose-built for data generation. A custom backend was 

CTRL is trained on an especially lar






## Design







Made with care by:
```json5
    'group_member_0': [brian chen](https://github.com/ihasdapie),
    'group_member_1': 
    'group_member_2': 
    'group_member_3': 
```





