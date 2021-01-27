export const buttonTemplate = `
    <button type="{{type}}" id="{{id}}" class="button-primary {{class}}">
    {{#if isCircle}}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
    {{else}}
        {{text}}
    {{/if}}
    </button>
`