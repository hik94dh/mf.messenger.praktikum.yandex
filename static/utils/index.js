const compileTemplate = (id, tmpl, data) => {
  const element = document.getElementById(id);
  const template = Handlebars.compile(tmpl);

  element.innerHTML = template(data);
}