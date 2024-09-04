import { Chat, ChatOptions, ModelType, Site } from './base';
import { Mcbbs } from './mcbbs';
import { Phind } from './phind';
import { Vita } from './vita';
import { Copilot } from './copilot';
import { Skailar } from './skailar';
import { FakeOpen } from './fakeopen';
import { EasyChat } from './easychat';
import { Better } from './better';
import { PWeb } from './pweb';
import { Bai } from './bai';
import { Gra } from './gra';
import { Magic } from './magic';
import { Chim } from './chim';
import { Ram } from './ram';
import { Chur } from './chur';
import { Xun } from './xun';
import { VVM } from './vvm';
import { ClaudeChat } from './claude';
import { Cursor } from './cursor';
import { Auto } from './auto';
import { ChatBase } from './chatbase';
import { OpenPrompt } from './openprompt';
import { AILS } from './ails';
import { Perplexity } from './perplexity';
import { ChatDemo } from './chatdemo';
import { SinCode } from './sincode';
import { OpenAI } from './openai';
import { OneAPI } from './oneapi';
import { Jasper } from './jasper';
import { Pap } from './pap';
import { MyShell } from './myshell';
import { AcyToo } from './acytoo';
import { Google } from './google';
import { WWW } from './www';
import { DDG } from './ddg';
import { Vanus } from './vanus';
import { Mixer } from './mixer';
import { Merlin } from './merlin';
import { Airops } from './airops';
import { Langdock } from './langdock';
import { Toyy } from './toyy';
import { TakeOff } from './takeoff';
import { Navit } from './navit';
import { ClaudeAPI } from './claudeapi';
import { Stack } from './stack';
import { TD } from './td';
import { Izea } from './izea';
import { Askx } from './askx';
import { OpenSess } from './opensess';
import { Hypotenuse } from './hypotenuse';
import { Gemini } from './gemini';
import { AIRoom } from './airoom';
import { GPTGOD } from './gptgod';
import { Midjourney } from './midjourney';
import { FreeGPT4 } from './freegpt4';
import { Domo } from './domo';
import { BingCopilot } from './bingcopilot';
import { Pika } from './pika';
import { ClaudeAuto } from './claudeauto';
import { Suno } from './suno';
import { OpenAIAuto } from './openaiauto';
import { FreeGPT35 } from './freegpt35';
import { PerAuto } from './perauto';
import { PerLabs } from './perlabs';
import { MerlinGmail } from './merlingmail';
import { Chatgateai } from './chatgateai';
import { MJPlus } from './mjplus';
import { Doc2x } from './doc2x';
import { Bibi } from './bibi';
import { Groq } from './groq';
import { GLM } from './glm';
import { Config } from '../utils/config';
import { Vidu } from './vidu';
import { Flux } from './flux';
import { Fireworks } from './fireworks';
import { Runway } from './runway';
import { MJWeb } from './mjweb';
import { Ideogram } from './ideogram';

export class ChatModelFactory {
  private readonly modelMap: Map<Site, Chat>;
  private readonly options: ChatOptions | undefined;

  constructor(options?: ChatOptions) {
    this.modelMap = new Map();
    this.options = options;
    this.init();
  }

  init() {
    // register new model here
    // this.modelMap.set(Site.You, new You({ name: Site.You }));
    this.modelMap.set(Site.Phind, new Phind({ name: Site.Phind }));
    // this.modelMap.set(
    //   Site.Forefront,
    //   new Forefrontnew({ name: Site.Forefront, net: false }),
    // );
    // this.modelMap.set(Site.Mcbbs, new Mcbbs({ name: Site.Mcbbs }));
    // this.modelMap.set(Site.ChatDemo, new ChatDemo({ name: Site.ChatDemo }));
    // this.modelMap.set(Site.Vita, new Vita({ name: Site.Vita }));
    // this.modelMap.set(Site.Copilot, new Copilot({ name: Site.Copilot }));
    // this.modelMap.set(Site.Skailar, new Skailar({ name: Site.Skailar }));
    this.modelMap.set(Site.FakeOpen, new FakeOpen({ name: Site.FakeOpen }));
    // this.modelMap.set(
    //   Site.EasyChat,
    //   new EasyChat({ name: Site.EasyChat, model: ModelType.GPT4 }),
    // );
    // this.modelMap.set(Site.Better, new Better({ name: Site.Better }));
    // this.modelMap.set(Site.PWeb, new PWeb({ name: Site.PWeb }));
    // this.modelMap.set(Site.Bai, new Bai({ name: Site.Bai }));
    // this.modelMap.set(Site.Gra, new Gra({ name: Site.Gra }));
    // this.modelMap.set(Site.Magic, new Magic({ name: Site.Magic }));
    // this.modelMap.set(Site.Chim, new Chim({ name: Site.Chim }));
    // this.modelMap.set(Site.Poe, new Poe({ name: Site.Poe }));
    // this.modelMap.set(Site.Ram, new Ram({ name: Site.Ram }));
    // this.modelMap.set(Site.Chur, new Chur({ name: Site.Chur }));
    // this.modelMap.set(Site.Xun, new Xun({ name: Site.Xun }));
    // this.modelMap.set(Site.VVM, new VVM({ name: Site.VVM }));
    // this.modelMap.set(Site.Poef, new Poef({ name: Site.Poef }));
    this.modelMap.set(
      Site.MerlinGmail,
      new MerlinGmail({ name: Site.MerlinGmail }),
    );
    this.modelMap.set(
      Site.ClaudeChat,
      new ClaudeChat({ name: Site.ClaudeChat }),
    );
    // this.modelMap.set(Site.Cursor, new Cursor({ name: Site.Cursor }));
    this.modelMap.set(Site.OneAPI, new OneAPI({ name: Site.OneAPI }));
    this.modelMap.set(
      Site.Auto,
      new Auto({ name: Site.Auto, ModelMap: this.modelMap }),
    );
    // this.modelMap.set(Site.ChatBase, new ChatBase({ name: Site.ChatBase }));
    // this.modelMap.set(
    //   Site.OpenPrompt,
    //   new OpenPrompt({ name: Site.OpenPrompt }),
    // );
    // this.modelMap.set(Site.AiLs, new AILS({ name: Site.AiLs }));
    this.modelMap.set(Site.SinCode, new SinCode({ name: Site.SinCode }));
    this.modelMap.set(Site.OpenAI, new OpenAI({ name: Site.OpenAI }));
    // this.modelMap.set(Site.Jasper, new Jasper({ name: Site.Jasper }));
    // this.modelMap.set(Site.Pap, new Pap({ name: Site.Pap }));
    // this.modelMap.set(Site.MyShell, new MyShell({ name: Site.MyShell }));
    // this.modelMap.set(Site.AcyToo, new AcyToo({ name: Site.AcyToo }));
    this.modelMap.set(Site.Google, new Google({ name: Site.Google }));
    this.modelMap.set(Site.WWW, new WWW({ name: Site.WWW }));
    this.modelMap.set(Site.DDG, new DDG({ name: Site.DDG }));
    // this.modelMap.set(Site.Vanus, new Vanus({ name: Site.Vanus }));
    this.modelMap.set(Site.Mixer, new Mixer({ name: Site.Mixer }));
    this.modelMap.set(Site.Merlin, new Merlin({ name: Site.Merlin }));
    // this.modelMap.set(Site.Airops, new Airops({ name: Site.Airops }));
    this.modelMap.set(Site.Langdock, new Langdock({ name: Site.Langdock }));
    // this.modelMap.set(Site.Toyy, new Toyy({ name: Site.Toyy }));
    // this.modelMap.set(Site.TakeOff, new TakeOff({ name: Site.TakeOff }));
    this.modelMap.set(Site.Navit, new Navit({ name: Site.Navit }));
    this.modelMap.set(Site.Claude, new ClaudeAPI({ name: Site.Claude }));
    this.modelMap.set(Site.Stack, new Stack({ name: Site.Stack }));
    this.modelMap.set(Site.TD, new TD({ name: Site.TD }));
    this.modelMap.set(Site.Izea, new Izea({ name: Site.Izea }));
    this.modelMap.set(Site.Askx, new Askx({ name: Site.Askx }));
    this.modelMap.set(Site.OpenSess, new OpenSess({ name: Site.OpenSess }));
    this.modelMap.set(Site.Gemini, new Gemini({ name: Site.Gemini }));
    this.modelMap.set(Site.AIRoom, new AIRoom({ name: Site.AIRoom }));
    this.modelMap.set(Site.GPTGOD, new GPTGOD({ name: Site.GPTGOD }));
    this.modelMap.set(Site.FreeGPT4, new FreeGPT4({ name: Site.FreeGPT4 }));
    this.modelMap.set(Site.Domo, new Domo({ name: Site.Domo }));
    this.modelMap.set(Site.Pika, new Pika({ name: Site.Pika }));
    this.modelMap.set(Site.Suno, new Suno({ name: Site.Suno }));
    this.modelMap.set(Site.PerAuto, new PerAuto({ name: Site.PerAuto }));
    this.modelMap.set(Site.FreeGPT35, new FreeGPT35({ name: Site.FreeGPT35 }));
    this.modelMap.set(Site.PerLabs, new PerLabs({ name: Site.PerLabs }));
    this.modelMap.set(Site.MJPlus, new MJPlus({ name: Site.MJPlus }));
    this.modelMap.set(Site.Doc2x, new Doc2x({ name: Site.Doc2x }));
    this.modelMap.set(Site.Groq, new Groq({ name: Site.Groq }));
    this.modelMap.set(Site.Bibi, new Bibi({ name: Site.Bibi }));
    this.modelMap.set(Site.Vidu, new Vidu({ name: Site.Vidu }));
    this.modelMap.set(Site.Fireworks, new Fireworks({ name: Site.Fireworks }));
    this.modelMap.set(Site.Runway, new Runway({ name: Site.Runway }));
    this.modelMap.set(Site.Ideogram, new Ideogram({ name: Site.Ideogram }));
    this.modelMap.set(
      Site.GLM,
      new GLM({
        name: Site.GLM,
        api_key: Config.config.glm?.api_key,
        base_url: Config.config.glm?.base_url,
      }),
    );
    this.modelMap.set(
      Site.Chatgateai,
      new Chatgateai({ name: Site.Chatgateai }),
    );
    this.modelMap.set(
      Site.OpenAIAuto,
      new OpenAIAuto({ name: Site.OpenAIAuto }),
    );
    this.modelMap.set(Site.Flux, new Flux({ name: Site.Flux }));
    this.modelMap.set(Site.MJWeb, new MJWeb({ name: Site.MJWeb }));
    this.modelMap.set(
      Site.ClaudeAuto,
      new ClaudeAuto({ name: Site.ClaudeAuto }),
    );
    this.modelMap.set(
      Site.BingCopilot,
      new BingCopilot({ name: Site.BingCopilot }),
    );
    this.modelMap.set(
      Site.Midjourney,
      new Midjourney({ name: Site.Midjourney }),
    );
    this.modelMap.set(
      Site.Hypotenuse,
      new Hypotenuse({ name: Site.Hypotenuse }),
    );
    this.modelMap.set(
      Site.Perplexity,
      new Perplexity({ name: Site.Perplexity }),
    );
  }

  get(model: Site): Chat | undefined {
    return this.modelMap.get(model);
  }

  forEach(callbackfn: (value: Chat, key: Site, map: Map<Site, Chat>) => void) {
    this.modelMap.forEach(callbackfn);
  }
}

export const chatModel = new ChatModelFactory();
