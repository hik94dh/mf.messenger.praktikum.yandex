export const template = `<div class="container">
      <form action="" method="post" class="form">
          <div>
              <h1 class="form-title">{{title}}</h1>
              <div class="form-input_wrapper">
                  <label class="form-input_placeholder">{{email}}</label>
                  <input name="email" type="text" class="js-input">
              </div>
              <div class="form-input_wrapper">
                  <label class="form-input_placeholder">{{login}}</label>
                  <input name="login" type="text" class="js-input">
              </div>
              <div class="form-input_wrapper">
                  <label class="form-input_placeholder">{{first_name}}</label>
                  <input name="first_name" type="text" class="js-input">
              </div>
              <div class="form-input_wrapper">
                  <label class="form-input_placeholder">{{second_name}}</label>
                  <input name="second_name" type="text" class="js-input">
              </div>
              <div class="form-input_wrapper">
                  <label class="form-input_placeholder">{{phone}}</label>
                  <input name="phone" type="text" class="js-input">
              </div>
              <div class="form-input_wrapper">
                  <label class="form-input_placeholder">{{password}}</label>
                  <input name="password" type="text" class="js-input">
              </div>
              <div class="form-input_wrapper">
                  <label class="form-input_placeholder">{{password2}}</label>
                  <input name="password" type="text" class="js-input">
              </div>
          </div>
          <div class="form-buttons_wrapper">
              {{{button}}}
              <a href="index.html" class="link-primary">
                  {{entry}}
              </a>
          </div>
      </form>
    </div>`;
//# sourceMappingURL=template.js.map