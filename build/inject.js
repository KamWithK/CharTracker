(()=>{console.log("Injected");var i;async function r(){return new Promise((e,n)=>{chrome.storage.local.get("previously_hooked",function(t){(t===void 0||t.previously_hooked===void 0)&&reject(),chrome.storage.local.get(t.previously_hooked,function(a){e(a)})})})}function c(e){document.title="CharTracker | "+game_name,chrome.storage.local.get(i,function(n){n[Object.keys(n)[0]].name=e.target.value,chrome.storage.local.set(n)})}document.getElementById("game_name").onchange=c;async function d(){game_name_heading=document.getElementById("game_name"),game_name_heading.disabled=!0,game_entry=await r(),game_name=game_entry[Object.keys(game_entry)[0]].name,game_name_heading.value=game_name,game_name_heading.disabled=!1,document.title="CharTracker | "+game_name}d();function _(e,n,t){try{if(parsed=JSON.parse(e),n==null&&typeof t=="string"&&typeof e=="string"&&parsed.length==2&&typeof parsed[0]=="string"&&Number.isInteger(parsed[1]))return parsed}catch{}return!1}function m(e){return e.length}function u(e){return e.split(`
`),e.split(`
`).length}function g(e){confirmed=confirm(`Are you sure you'd like to delete this line?
Char and line statistics will be modified accordingly however time read won't change...`),confirmed&&(element_div=e.target.parentNode,line_id=element_div.dataset.line_id,line_key=JSON.stringify([i,Number.parseInt(line_id)]),chrome.storage.local.get([line_key,i],function(n){line=n[line_key],delete n[line_key],chrome.storage.local.remove(line_key),game_date_key=i+"_"+n[i].dates_read_on[0],chrome.storage.local.get(game_date_key,function(t){t[game_date_key].lines_read-=m(line),t[game_date_key].chars_read-=u(line),chrome.storage.local.set(t),element_div.remove()})}))}function l(e,n){return container_div=document.createElement("div"),new_svg=document.createElement("svg"),new_p=document.createElement("p"),new_button=document.createElement("button"),container_div.classList.add("sentence-entry"),new_svg.classList.add("circle-bullet-point"),new_p.classList.add("sentence"),new_button.classList.add("delete-button"),new_button.classList.add("material-icons"),container_div.dataset.line_id=n,new_p.innerHTML=e,new_button.innerHTML="delete",new_button.onclick=g,container_div.appendChild(new_svg),container_div.appendChild(new_p),container_div.appendChild(new_button),container_div}function h(e,n){entry_holder=document.getElementById("entry_holder"),new_div=l(e,n),entry_holder.appendChild(new_div)}async function s(){game_entry=await r(),process_path=Object.keys(game_entry)[0],i=process_path,max_line_id=game_entry[process_path].last_line_added,id_queries=[...Array(max_line_id+1).keys()].map(e=>JSON.stringify([process_path,e])),chrome.storage.local.get(id_queries,function(e){line_divs=[];for(let[n,t]of Object.entries(e))line_id=JSON.parse(n)[1],line_divs.push(l(t,line_id));entry_holder=document.getElementById("entry_holder"),entry_holder.replaceChildren(...line_divs)})}s();chrome.storage.local.onChanged.addListener(function(e,n){for(let[t,{oldValue:a,newValue:o}]of Object.entries(e))t=_(t,a,o),t&&(d(),process_path=t[0],line_id=t[1],line=o,process_path!=i?(console.log("Game Changed, Readding Lines..."),s()):h(line,line_id))});})();
