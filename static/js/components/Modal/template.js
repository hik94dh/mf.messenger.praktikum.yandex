export const modalTemplate = `
    <div class="modal-wrapper js-modal">
        <div class="modal-backdrop js-modal-backdrop"></div>
        <div class="modal">
            <h4 class="modal-title js-modal-title">{{{title}}}</h4>
            <form method="post" enctype="multipart/form-data">
                {{{input}}}
                {{{button}}}
                {{#if hint.show}}
                    <p class="profile-image_hint">{{hint.text}}</p>
                {{/if}}
            </form>
        </div>
    </div>
`;
//# sourceMappingURL=template.js.map