export const template = `<div class="container">
        <form action="#" class="form">
            <div>
                <h1 class="form-title">{{title}}</h1>
                <div class="form-input_wrapper">
                    <label class="form-input_placeholder">{{login}}</label>
                    <input name="login" type="text" class="js-input">
                </div>
                <div class="form-input_wrapper">
                    <label class="form-input_placeholder">{{password}}</label>
                    <input name="password" type="text" class="js-input">
                </div>
            </div>
            <div class="form-buttons_wrapper">
                {{{button}}}
                <a href="sign-up.html" class="link-primary">
                    {{link}}
                </a>
            </div>
        </form>
  </div>`;
//# sourceMappingURL=template.js.map