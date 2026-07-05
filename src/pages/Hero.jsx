import React from 'react';

const Hero = () => {
    return (
        <body class="bg-bg1">

            <section class="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-[6vw] py-24 font-body text-ink
    bg-[linear-gradient(135deg,#0b0f1f_0%,#1b1440_52%,#2c1a52_100%)]">

                <div class="pointer-events-none absolute inset-0
      bg-[radial-gradient(120%_140%_at_8%_15%,rgba(94,234,212,0.10),transparent_55%),radial-gradient(100%_120%_at_95%_85%,rgba(167,139,250,0.16),transparent_50%)]">
                </div>

                <div class="pointer-events-none absolute inset-0
      bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
      bg-[length:64px_64px]
      [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black_40%,transparent_85%)]">
                </div>

                <div class="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] items-center gap-14">

                    <div class="max-w-[620px] mx-auto md:mx-0 text-center md:text-left">

                        <p class="inline-flex items-center gap-2 font-mono text-sm text-cyan mb-6 opacity-90">
                            <span class="w-2 h-2 rounded-full bg-cyan shadow-[0_0_0_4px_rgba(94,234,212,0.15)]"></span>
                            available for junior frontend roles
                        </p>

                        <h1 class="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight mb-5">
                            Hi, I'm <br></br> 
                            <span class="bg-[linear-gradient(100deg,#5eead4,#fbbf6a_60%,#a78bfa)] bg-clip-text text-transparent">Emon</span>.
                        </h1>

                        <p class="text-lg leading-relaxed text-inkmuted mb-9 max-w-[54ch] mx-auto md:mx-0">
                            I'm an aspiring Full Stack developer learning and building responsive, user-friendly web applications.
                            I enjoy solving problems, learning modern web technologies, and turning ideas into functional websites.
                        </p>

                        <div class="flex flex-wrap justify-center md:justify-start gap-4 mb-9">
                            <a href="#work"
                                class="font-semibold text-sm px-7 py-3.5 rounded-full text-[#06101c]
                  bg-[linear-gradient(100deg,#5eead4,#38bdf8)]
                  transition-transform duration-200 hover:-translate-y-0.5
                  hover:shadow-[0_10px_24px_-8px_rgba(94,234,212,0.55)]
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-2">
                                Download Resume
                            </a>
                            <a href="#contact"
                                class="font-semibold text-sm px-7 py-3.5 rounded-full text-ink border border-white/20
                  transition-transform duration-200 hover:-translate-y-0.5 hover:border-white/50
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-2">
                                Get in touch
                            </a>
                        </div>

                        <div class="flex items-center justify-center md:justify-start gap-3 flex-wrap font-mono text-xs text-inkmuted">
                            <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10">React</span>
                            <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10">JavaScript</span>
                            <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10">CSS</span>
                            <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10">HTML</span>
                            <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10">TypeScript</span>
                            <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10">TailwindCSS</span>
                            <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10">TailwindCSS</span>
                        </div>
                    </div>

                    <div class="relative w-[min(340px,100%)] aspect-square mx-auto order-first md:order-none">

                        <div class="motion-safe-spin absolute -inset-8 rounded-full border border-dashed border-cyan/35 animate-spin-slow"></div>
                        <div class="motion-safe-spin absolute -inset-16 rounded-full border border-dashed border-violet/25 animate-spin-slower"></div>

                        <span class="absolute -top-[6%] -left-[12%] font-mono text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 backdrop-blur">
                            &lt;/&gt; learning React
                        </span>
                        <span class="absolute bottom-[8%] -left-[18%] font-mono text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 backdrop-blur">
                            building UI
                        </span>

                        <div class="absolute inset-0 rounded-full p-1 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]
          bg-[linear-gradient(140deg,#5eead4,#a78bfa_60%,#fbbf6a)]">
                            <div class="w-full h-full rounded-full flex items-center justify-center overflow-hidden relative
            bg-[radial-gradient(120%_120%_at_30%_20%,#3a3564,transparent_60%),linear-gradient(160deg,#241d4a,#150f30_70%)]">
                                <span class="font-display font-bold text-8xl bg-[linear-gradient(140deg,#5eead4,#fbbf6a)] bg-clip-text text-transparent select-none">
                                    E
                                </span>
                            </div>
                        </div>

                        <div class="absolute bottom-[6%] right-[2%] flex items-center gap-2 px-3.5 py-2 rounded-full
          bg-bg1/90 border border-white/10 font-mono text-xs backdrop-blur">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.25)]"></span>
                            open to work
                        </div>
                    </div>

                </div>
            </section>

        </body>
    )
};

export default Hero;