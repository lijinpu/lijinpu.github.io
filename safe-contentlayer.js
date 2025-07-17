const { spawn } = require('child_process');

const cmd = spawn('npx', ['contentlayer', 'build'], { stdio: 'inherit', shell: true });

cmd.on('close', (code) => {
  if (typeof code === 'number' && code === 0) {
    process.exit(0);
  } else {
    console.warn('\n⚠️  Contentlayer exited with error but was ignored (see https://github.com/contentlayerdev/contentlayer/issues/668)');
    process.exit(0); // 强制不报错退出
  }
});
