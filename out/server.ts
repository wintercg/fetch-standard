Deno.serve((req) => {
  return Response.redirect("https://fetch.spec.whatwg.org", 301);
});
