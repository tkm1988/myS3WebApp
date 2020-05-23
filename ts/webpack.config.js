// �ץ饰��������Ѥ��뤿���webpack���ɤ߹���Ǥ���
const webpack = require('webpack');

// output.path�����Хѥ�����ꤹ��ɬ�פ����뤿�ᡢpath�⥸�塼����ɤ߹���Ǥ���
const path = require('path');

module.exports = {
    // �⡼���ͤ� production �����ꤹ��Ⱥ�Ŭ�����줿���֤ǡ�
    // development �����ꤹ��ȥ������ޥå�ͭ����JS�ե����뤬���Ϥ����
    mode: "development",
    devtool: 'inline-source-map',
    
    // �ᥤ��Ȥʤ�JavaScript�ե�����ʥ���ȥ꡼�ݥ���ȡ�
    entry: "./requestAPI.ts",
    output: {
        path: __dirname + '/../js/',
        filename: 'requestAPI.js'
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
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};

