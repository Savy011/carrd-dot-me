export default function(cfg) {
  cfg.setInputDirectory('src');
  cfg.setOutputDirectory('dist');

  cfg.setServerOptions({
    port: 1212,
  })
}
