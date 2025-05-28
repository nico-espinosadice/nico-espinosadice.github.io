+++
title = 'Home'
draft = false
+++

<div style="display: flex; align-items: center;">
    <img src="/images/nico.jpg" alt="Nicolas Espinosa Dice" style="width: 25%; margin-right: 20px;">
    <div>
        I am a second-year PhD student at <a href="https://cis.cornell.edu/">Cornell University</a>, where I am advised by <a href="https://wensun.github.io/">Wen Sun</a>. My research focuses on reinforcement learning, imitation learning, and generative models.
        <br>
        <br>
        Prior to Cornell, I received a B.S. in Mathematics and Computer Science from <a href="https://www.hmc.edu/">Harvey Mudd College</a>, where I was advised by <a href="https://www.cs.hmc.edu/~montanez/">George D. Montanez</a> and <a href="https://www.math.hmc.edu/~dk/">Dagan Karp</a>. I worked with George D. Montanez in the <a href="https://www.cs.hmc.edu/~montanez/amistad.html">AMISTAD Lab</a> and <a href="https://math.hmc.edu/gu/">Weiqing Gu</a> at <a href="https://data-to-decision.com/">Dasion</a>.
    </div>
</div>

Last updated: March 2025
<!-- I have been fortunate to work with the following great collaborators: Kiante Brantley, Yiding Chen, Gokul Swamy, Owen Oertell, Yiyi Zhang, Sanjiban Choudhury.  -->

## <span id="research">Research</span>
[**Efficient Imitation Under Misspecification**](https://arxiv.org/abs/2503.13162)  
    [**Nicolas Espinosa Dice**](https://nico-espinosadice.github.io/),
    [Sanjiban Choudhury](https://www.sanjibanchoudhury.com/),
    [Wen Sun](https://wensun.github.io/), 
    [Gokul Swamy](https://gokul.dev/)  
    *ICLR 2025*  
    [Paper](https://arxiv.org/abs/2503.13162) | 
    [Code](https://github.com/nico-espinosadice/garage-fork/tree/main)  
    We consider the problem of imitation learning under *misspecification*: settings where the learner is fundamentally unable to replicate expert behavior. Building on prior work in *efficient inverse reinforcement learning* through computationally efficient *local search* procedures, we first prove that under a novel structural condition we term *reward-agnostic policy completeness*, these sorts of local-search based IRL algorithms are able to avoid compounding errors, even in the misspecified setting. We then consider the question of *where* we should perform local search in the first place, given the learner may not be able to "walk on a tightrope" as well as the expert in the misspecified setting. We prove that in the misspecified setting, it is beneficial to *broaden* the set of states on which local search is performed to include states reachable by good policies that the learner can actually play. We then experimentally explore a variety of sources of misspecification and how *offline* data can be used to effectively broaden where we perform local search from.


[**Efficient Inverse Reinforcement Learning Without Compounding Errors**](https://nico-espinosadice.github.io/efficient-IRL/)  
    [**Nicolas Espinosa Dice**](https://nico-espinosadice.github.io/),
    [Gokul Swamy](https://gokul.dev/),
    [Sanjiban Choudhury](https://www.sanjibanchoudhury.com/),
    [Wen Sun](https://wensun.github.io/)  
    *RLC 2024 RLSW, RLBRew*  
    [Project Page](https://nico-espinosadice.github.io/compounding-errors-in-IRL/) |
    [Paper](https://nico-espinosadice.github.io/efficient-IRL/static/efficient-irl.pdf) |
    [Code](https://github.com/nico-espinosadice/garage-fork/tree/main)  
    There are two seemingly contradictory desiderata for IRL algorithms: (a) preventing the compounding errors that stymie offline approaches like behavioral cloning and (b) avoiding the worst-case exploration complexity of reinforcement learning (RL). Prior work has been able to achieve either (a) or (b) but not both simultaneously. We prove that, under a novel structural condition we term reward-agnostic policy completeness, efficient IRL algorithms do avoid compounding errors, giving us the best of both worlds.

