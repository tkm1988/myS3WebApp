module.exports = {
  // �⡼���ͤ� production �����ꤹ��Ⱥ�Ŭ�����줿���֤ǡ�
  // development �����ꤹ��ȥ������ޥå�ͭ����JS�ե����뤬���Ϥ����
  mode: "development",

  // �ᥤ��Ȥʤ�JavaScript�ե�����ʥ���ȥ꡼�ݥ���ȡ�
  entry: "./getAPI.ts",
  output: {
       path: __dirname + '/dist',
       filename: 'getAPI.js'
  },
  module: {
    rules: [
      {
        // ��ĥ�� .ts �ξ��
        test: /\.ts$/,
        // TypeScript �򥳥�ѥ��뤹��
        use: "ts-loader"
      }
    ]
  },

  // import ʸ�� .ts �ե�������褹�뤿��
  resolve: {
    extensions: [".ts"]
  }
};

