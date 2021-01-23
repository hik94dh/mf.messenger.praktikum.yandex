export const template = `<div class="container">
    <div class="profile-wrapper">
        <div class="button-back_wrapper">
            <button class="button-primary button-circle" id="buttonBack">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
            </button>
        </div>
        <div class="container">
            <div class="profile-inner_wrapper">
                <div class="profile-image" id="changeImage">
                    <span>{{imageText}}</span>
                </div>
                <h2 class="profile-name">{{name}}</h2>
                <ul>
                {{#each dataList}}
                    <li><span>{{left}}</span> <span>{{right}}</span></li>
                {{/each}}
                </ul>
                
                {{#if links.show}}
                    <ul class="profile-links">
                    {{#each links.list}}
                        <li><a href="{{href}}" class="link-primary {{class}}"><span>{{text}}</span></a></li>
                    {{/each}}
                    </ul>
                    
                    {{else}}
                    
                    {{{button}}}
                {{/if}}
            </div>
        </div>
    </div>
    {{{modal}}}
  </div>`;
// const modalTemplate = `
//     <div class="modal-wrapper js-change-image-modal">
//         <div class="modal-backdrop"></div>
//         <div class="modal">
//             <h4 class="modal-title" id="profile-image_modal-title">Загрузите файл</h4>
//             <form method="post" enctype="multipart/form-data">
//                 <div class="form-input_wrapper profile-image_input">
//                     <label for="profile-image_input" id="profile-image_label">Выбрать файл на компьютере</label>
//                     <input id="profile-image_input" type="file" accept="image/*,image/jpeg" multiple>
//                 </div>
//                 <button id="profile-image_submit-button" type="submit" class="button-primary">Поменять</button>
//                 <p class="profile-image_hint" >Нужно выбрать файл</p>
//             </form>
//         </div>
//     </div>`
//# sourceMappingURL=template.js.map