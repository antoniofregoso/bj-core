import { AppElement } from "./AppElement";

/**
 * Funnel Page Footer
 */
export class PageFooter extends AppElement {

    #default = {}

    constructor(props={}){
        super();
        this.state =this.initState(this.#default,props);   
        this.getAttribute("id")||this.setAttribute("id",this.state.id||`component-${Math.floor(Math.random() * 100)}`);   
    } 

    render(){
        this.innerHTML =  /* html */`
        <footer ${this.getClasses(["footer"], this.state.classList)} >
            <div class="content has-text-centered">
                    <img  src="${ this.state.brand?.src }" style="max-width:200px">
                <p>${ this.state.content?.text[this.state.context.lang] }</p>
                <p><a href="${ this.state.privacyPolicy?.url }">${ this.state.privacyPolicy?.text===undefined?'':this.state.privacyPolicy?.text[this.state.context.lang] }</a></p>
            </div>
            <div class="has-text-left" >
                <h4>Powered by <a href="https://www.conference.com.mx/comercializacion-digital">Conference</a></h4>
            </div>
        </footer>
        `;
    }
}


customElements.define("page-footer", PageFooter)