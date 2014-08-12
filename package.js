Package.describe({
  summary: "Draws simple SVG sequence diagrams from textual representation of the diagram."
});

Package.on_use(function (api) {
  api.use(['jquery', 'raphael'], 'client');
  api.add_files('lib/build/sequence-diagram-min.js', 'client');
  api.add_files('export.js', 'client');
  api.export('Diagram');
});