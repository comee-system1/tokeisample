//
export function getMenuTree() {
    return {
        fileMenu: [
            {
                header: '新規作成',
                items: [
                    {
                        header: 'プロジェクト'
                    },
                    {
                        header: 'サイト'
                    },
                    {
                        header: 'ファイル'
                    }
                ]
            },
            {
                header: '開く'
            },
            {
                header: '保存'
            },
            {
                header: '名前を付けて保存',
                items: [
                    {
                        header: '通常のファイル'
                    },
                    {
                        header: '圧縮されたファイル'
                    },
                    {
                        header: '暗号化されたファイル'
                    }
                ]
            },
            {
                header: '-'
            },
            {
                header: '終了'
            }
        ],
        editMenu: [
            {
                header: '移動',
                items: [
                    {
                        header: '行に移動'
                    },
                    {
                        header: '定義に移動'
                    },
                    {
                        header: 'ファイルに移動',
                        items: [
                            {
                                header: '現在のプロジェクト'
                            },
                            {
                                header: '現在のソリューション'
                            },
                            {
                                header: '選択...'
                            }
                        ]
                    }
                ]
            },
            {
                header: '検索と置換',
                items: [
                    {
                        header: 'クイック検索'
                    },
                    {
                        header: 'クイック置換'
                    },
                    {
                        header: 'フォルダーを指定して検索'
                    },
                    {
                        header: 'フォルダーを指定して置換',
                        items: [
                            {
                                header: '置換'
                            },
                            {
                                header: 'すべて置換'
                            }
                        ]
                    }
                ]
            },
            {
                header: '-'
            },
            {
                header: '元に戻す'
            },
            {
                header: 'やり直し'
            }
        ],
        formatMenu: [
            {
                header: 'フォント',
                items: [
                    {
                        header: 'フォント名',
                        items: [
                            {
                                header: 'Arial',
                                prop: 'face'
                            },
                            {
                                header: 'Times',
                                prop: 'face'
                            },
                            {
                                header: 'Courier',
                                prop: 'face'
                            },
                            {
                                header: 'Verdana',
                                prop: 'face'
                            },
                            {
                                header: 'Georgia',
                                prop: 'face'
                            }
                        ]
                    },
                    {
                        header: '太字',
                        prop: 'font'
                    },
                    {
                        header: '斜体',
                        prop: 'font'
                    },
                    {
                        header: '下線',
                        prop: 'font'
                    },
                    {
                        header: '-'
                    },
                    {
                        header: '大きいサイズ',
                        prop: 'font'
                    },
                    {
                        header: '小さいサイズ',
                        prop: 'font'
                    }
                ]
            },
            {
                header: 'テキストの色',
                items: [
                    {
                        header: 'Black',
                        prop: 'color'
                    },
                    {
                        header: 'Red',
                        prop: 'color'
                    },
                    {
                        header: 'Green',
                        prop: 'color'
                    },
                    {
                        header: 'Blue',
                        prop: 'color'
                    }
                ]
            },
            {
                header: '背景色',
                items: [
                    {
                        header: 'White',
                        prop: 'background'
                    },
                    {
                        header: 'Red',
                        prop: 'background'
                    },
                    {
                        header: 'Green',
                        prop: 'background'
                    },
                    {
                        header: 'Blue',
                        prop: 'background'
                    }
                ]
            }
        ]
    };
}
