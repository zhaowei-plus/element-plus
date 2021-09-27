import{_ as a,c as n,o as s,e as t,b as e,d as p}from"./app.a4b4062b.js";const o='{"title":"Installation","description":"","frontmatter":{"title":"Installation"},"headers":[{"level":2,"title":"Compatibilité","slug":"compatibilite"},{"level":3,"title":"Version","slug":"version"},{"level":2,"title":"Utiliser le gestionnaire de paquets","slug":"utiliser-le-gestionnaire-de-paquets"},{"level":2,"title":"Importer dans le navigateur","slug":"importer-dans-le-navigateur"},{"level":3,"title":"unpkg","slug":"unpkg"},{"level":3,"title":"jsDelivr","slug":"jsdelivr"},{"level":2,"title":"Bonjour le monde","slug":"bonjour-le-monde"}],"relativePath":"fr-FR/guide/installation.md","lastUpdated":1632723447714}',l={},r=[t('<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h1><h2 id="compatibilite" tabindex="-1">Compatibilité <a class="header-anchor" href="#compatibilite" aria-hidden="true">#</a></h2><p>Element Plus peut s&#39;exécuter sur des navigateurs qui prennent en charge <a href="https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally" target="_blank" rel="noopener noreferrer">ES2018</a> et <a href="https://caniuse.com/resizeobserver" target="_blank" rel="noopener noreferrer">ResizeObserver</a>. Si vous avez vraiment besoin de prendre en charge les navigateurs obsolètes, veuillez ajouter <a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">Babel</a> et Polyfill vous-même.</p><p>Puisque Vue 3 ne prend plus en charge IE11, Element Plus ne supporte pas IE non plus.</p><table><thead><tr><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png" alt="IG"></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png" alt="Firefox"></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png" alt="Chrome"></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png" alt="Safari"></th></tr></thead><tbody><tr><td>Arête †79</td><td>Firefox ≥ 78</td><td>Chrome †64</td><td>Safari †12</td></tr></tbody></table><h3 id="version" tabindex="-1">Version <a class="header-anchor" href="#version" aria-hidden="true">#</a></h3><p>Element Plus est actuellement en cours d&#39;itération de développement rapide.</p><p><a href="https://www.npmjs.org/package/element-plus" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/element-plus.svg?style=flat-square" alt="Insigne de version ElementPlus"></a></p><h2 id="utiliser-le-gestionnaire-de-paquets" tabindex="-1">Utiliser le gestionnaire de paquets <a class="header-anchor" href="#utiliser-le-gestionnaire-de-paquets" aria-hidden="true">#</a></h2><p><strong>Nous recommandons d&#39;utiliser le gestionnaire de paquets (NPM, <a href="https://classic.yarnpkg.com/lang/en/" target="_blank" rel="noopener noreferrer">Yarn</a>, <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">pnpm</a>) pour installer Element Plus</strong>, pour que vous puissiez utiliser des bundles comme <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a> et <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">webpack</a>.</p><div class="language-shell"><pre><code><span class="token comment"># Choisissez un gestionnaire de paquets que vous aimez.</span>\n\n<span class="token comment"># NPM</span>\n$ <span class="token function">npm</span> <span class="token function">install</span> element-plus --save\n\n<span class="token comment"># Yarn</span>\n$ <span class="token function">yarn</span> <span class="token function">add</span> element-plus\n\n<span class="token comment"># pnpm</span>\n$ <span class="token function">pnpm</span> <span class="token function">install</span> element-plus\n</code></pre></div><p>Si votre environnement réseau n&#39;est pas bon, il est recommandé d&#39;utiliser un registre miroir <a href="https://github.com/cnpm/cnpm" target="_blank" rel="noopener noreferrer">cnpm</a> ou <a href="https://registry.npm.taobao.org" target="_blank" rel="noopener noreferrer">Alibaba</a>.</p><h2 id="importer-dans-le-navigateur" tabindex="-1">Importer dans le navigateur <a class="header-anchor" href="#importer-dans-le-navigateur" aria-hidden="true">#</a></h2><p>Import Element Plus through browser HTML tags directly, and use global variable <code>ElementPlus</code>.</p><p>Selon différents fournisseurs de CDN, il existe différentes méthodes d&#39;introduction. Ici, nous utilisons <a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">unpkg</a> et <a href="https://jsdelivr.com" target="_blank" rel="noopener noreferrer">jsDelivr</a> comme exemple. Vous pouvez également utiliser d&#39;autres fournisseurs de CDN.</p><h3 id="unpkg" tabindex="-1">unpkg <a class="header-anchor" href="#unpkg" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!</span> <span class="token attr-name">-</span> <span class="token attr-name">Style</span> <span class="token attr-name">d&#39;importation</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!</span> <span class="token attr-name">-</span> <span class="token attr-name">Importer</span> <span class="token attr-name">Vue</span> <span class="token attr-name">3</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/vue@next<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!</span> <span class="token attr-name">-</span> <span class="token attr-name">Importer</span> <span class="token attr-name">la</span> <span class="token attr-name">bibliothèque</span> <span class="token attr-name">de</span> <span class="token attr-name">composants</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="jsdelivr" tabindex="-1">jsDelivr <a class="header-anchor" href="#jsdelivr" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!</span> <span class="token attr-name">-</span> <span class="token attr-name">Style</span> <span class="token attr-name">d&#39;importation</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!</span> <span class="token attr-name">-</span> <span class="token attr-name">Importer</span> <span class="token attr-name">Vue</span> <span class="token attr-name">3</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/vue@next<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!</span> <span class="token attr-name">-</span> <span class="token attr-name">Importer</span> <span class="token attr-name">la</span> <span class="token attr-name">bibliothèque</span> <span class="token attr-name">de</span> <span class="token attr-name">composants</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Nous recommandons d&#39;utiliser CDN pour importer des utilisateurs d&#39;Element Plus pour verrouiller la version sur l&#39;adresse du lien, afin de ne pas être affecté par des mises à jour incompatibles lorsque Element Plus est mis à jour dans le futur. Veuillez consulter <a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">unpkg.com</a> pour la méthode de verrouillage de la version.</p></div><h2 id="bonjour-le-monde" tabindex="-1">Bonjour le monde <a class="header-anchor" href="#bonjour-le-monde" aria-hidden="true">#</a></h2><p>Avec CDN, nous pouvons facilement utiliser Element Plus pour écrire une page Hello World. <a href="https://codepen.io/iamkun/pen/YzWMaVr" target="_blank" rel="noopener noreferrer">Démo en ligne</a></p>',22),e("iframe",{height:"469",style:{width:"100%"},scrolling:"no",title:"YzWMaVr",src:"https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default -tab=html,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true",mark:"crwd-mark"},"\n  Voir le stylo <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> par iamkun\n  (<a href='https://codepen.io/iamkun'>@iamkun</a>) sur <a href='https://codepen.io'>CodePen</a>.\n",-1),e("p",null,[p("Si vous installez via le gestionnaire de paquets et que vous voulez l'utiliser avec un outil de packaging, lisez la section suivante : "),e("a",{href:"/en-US/guide/quickstart.html"},"Démarrage rapide"),p(".")],-1)];var i=a(l,[["render",function(a,t,e,p,o,l){return s(),n("div",null,r)}]]);export{o as __pageData,i as default};