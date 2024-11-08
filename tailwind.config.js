/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js.ts.jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'highlight': '#28C9DA',
                'black30': 'rgba(0,0,0,0.3)',
                'cuccText': ' #0D0D13',
                'iconGrey': ' #a4a7ab',
            },
            borderWidth: {
                '0d02rem': '0.02rem',
            },
            backgroundColor: {
                "driver": "rgba(254, 254, 254, 0.11)",
            },
            backgroundSize: {
                "100a": "100% 100%"
            },
            borderRadius: {
                '0d04rem': '0.04rem',
                '0d07rem': '0.07rem',
                '0d08rem': '0.08rem',
                '0d1rem': '0.1rem',
                '0d12rem': '0.12rem',
                '0d14rem': '0.14rem',
                '0d15rem': '0.15rem',
                '0d16rem': '0.16rem',
                '0d18rem': '0.18rem',
                '0d22rem': '0.22rem',
                '0d24rem': '0.24rem',
                '0d25rem': '0.25rem',
                '0d4rem': '0.4rem',
                '50p': '50%',
            },
            fontSize: {
                '0d08rem': '0.08rem',
                '0d1rem': '0.1rem',
                '0d11rem': '0.11rem',
                '0d12rem': '0.12rem',
                '0d13rem': '0.13rem',
                '0d14rem': '0.14rem',
                '0d15rem': '0.15rem',
                '0d16rem': '0.16rem',
                '0d18rem': '0.18rem',
                '0d2rem': '0.2rem',
                '0d24rem': '0.24rem',
            },
            spacing: {
                '0d02rem': '0.02rem',
                '0d03rem': '0.03rem',
                '0d05rem': '0.05rem',
                '0d06rem': '0.06rem',
                '0d07rem': '0.07rem',
                '0d08rem': '0.08rem',
                '0d09rem': '0.09rem',
                '0d015rem': '0.15rem',
                '0d016rem': '0.16rem',
                '0d082rem': '0.82rem',
                '0d04rem': '0.04rem',
                '0d1rem': '0.1rem',
                '0d12rem': '0.12rem',
                '0d13rem': '0.13rem',
                '0d14rem': '0.14rem',
                '0d15rem': '0.15rem',
                '0d16rem': '0.16rem',
                '0d17rem': '0.17rem',
                '0d18rem': '0.18rem',
                '0d19rem': '0.19rem',
                '0d2rem': '0.2rem',
                '0d21rem': '0.21rem',
                '0d22rem': '0.22rem',
                '0d23rem': '0.23rem',
                '0d24rem': '0.24rem',
                '0d25rem': '0.25rem',
                '0d26rem': '0.26rem',
                '0d3rem': '0.3rem',
                '0d32rem': '0.32rem',
                '0d36rem': '0.36rem',
                '0d28rem': '0.28rem',
                '0d4rem': '0.4rem',
                '0d42rem': '0.42rem',
                '0d44rem': '0.44rem',
                '0d46rem': '0.46rem',
                '0d48rem': '0.48rem',
                '0d49rem': '0.49rem',
                '0d58rem': '0.58rem',
                '0d52rem': '0.52rem',
                '0d53rem': '0.53rem',
                '0d54rem': '0.54rem',
                '0d55rem': '0.55rem',
                '0d56rem': '0.56rem',
                '0d6rem': '0.6rem',
                '0d62rem': '0.62rem',
                '0d65rem': '0.65rem',
                '0d64rem': '0.64rem',
                '0d67rem': '0.67rem',
                '0d76rem': '0.76rem',
                '0d82rem': '0.82rem',
                '0d98rem': '0.98rem',
                '0d8rem': '0.8rem',
                '1d2rem': '1.2rem',
                '1d1rem': '1.1rem',
                '1d3rem': '1.3rem',
                '1d4rem': '1.4rem',
                '1d22rem': '1.22rem',
                '1d27rem': '1.27rem',
                '1d5rem': '1.5rem',
                '2d9rem': '2.9rem',
                '2d23rem': '2.23rem',
                '70percent': '70%',
            },
            margin: {
                'unset': 'unset',
                '1em': '1em'
            },
            text: {
                '0d15rem': '0.15rem',
            },
            lineHeight: {
                '0d21rem': '0.21rem',
                '0d22rem': '0.22rem'
            }
        },
    },
    plugins: [
        function ({addUtilities}) {
            addUtilities({
                '.text-indent-2em': {
                    textIndent: '2em'
                }
            })
            addUtilities({
                '.col-gap-15px': {
                    columnGap: '15px'
                }
            })
            addUtilities({
                '.line-break-anywhere': {
                    lineBreak: 'anywhere'
                }
            })
        },
    ],
}

