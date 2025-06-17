+++
title = 'Home'
draft = false
+++

<div style="display: flex; align-items: center;">
    <img src="/images/nico.jpg" alt="Nicolas Espinosa Dice" style="width: 25%; margin-right: 20px;">
    <div>
        I am a second-year PhD student at <a href="https://cis.cornell.edu/">Cornell University</a>, where I am advised by <a href="https://wensun.github.io/">Wen Sun</a> and supported by the <a href="https://nsfgrfp.org/">NSF GRFP</a> and the <a href="https://gradschool.cornell.edu/diversity-inclusion/signature-initiatives/graduate-school-deans-scholars/">Hopper-Dean and Bowers Fellowship</a>. My research focuses on reinforcement learning, imitation learning, and generative models.
    </div>
</div>

Prior to Cornell, I received a B.S. in Mathematics and Computer Science from [Harvey Mudd College](https://www.hmc.edu/), where I was advised by [George D. Montanez](https://www.cs.hmc.edu/~montanez/) and [Dagan Karp](https://www.math.hmc.edu/~dk/) and supported by the [Harvey S. Mudd Merit Award](https://www.hmc.edu/admission/afford/scholarships-and-grants/merit-based-scholarships/harvey-s-mudd-merit-award/). I worked with George D. Montanez in the [AMISTAD Lab](https://www.cs.hmc.edu/~montanez/amistad.html) on theoretical machine learning, receiving the [Computer Science Research Award](https://www.hmc.edu/cs/student-awards/) and [Clinic Program Individual Award](https://www.hmc.edu/cs/student-awards/). I then worked with [Weiqing Gu](https://math.hmc.edu/gu/) at [Dasion](https://data-to-decision.com/).

Last updated: June 2025

<center>

[CV](/images/CV.pdf) |
[Google Scholar](https://scholar.google.com/citations?user=yjPHHb8AAAAJ&hl=en) |
[Twitter/X](https://x.com/nico_espinosa_d) |
[Bluesky](https://bsky.app/profile/nico-espinosa-dice.bsky.social) |
[GitHub](https://github.com/nico-espinosadice) |
[LinkedIn](https://www.linkedin.com/in/nicolas-espinosa-dice/) |
[Email](mailto:ne229@cornell.edu)

</center>


## <span id="research">Research</span>
[**Scaling Offline RL via Efficient and Expressive Shortcut Models**](https://arxiv.org/abs/2505.22866)  
[**Nicolas Espinosa Dice**](https://nico-espinosadice.github.io/),
[Yiyi Zhang](https://www.linkedin.com/in/yiyi-zhang-8b673964/),
[Yiding Chen](https://chenyd.github.io/),
[Bradley Guo](https://www.linkedin.com/in/bradleyzguo),
[Owen Oertell](https://owenoertell.com/),
[Gokul Swamy](https://gokul.dev/),
[Kianté Brantley](https://xkianteb.github.io/),
[Wen Sun](https://wensun.github.io/)  
*Preprint*  
[Paper](https://arxiv.org/abs/2505.22866) | [Code](https://github.com/nico-espinosadice/SORL) | [Project Page](/projects/sorl) | [Thread](https://x.com/nico_espinosa_d/status/1933209680609788170)  
Diffusion and flow models have emerged as powerful generative approaches capable of modeling diverse and multimodal behavior. However, applying these models to offline reinforcement learning (RL) remains challenging due to the iterative nature of their noise sampling processes, making policy optimization difficult. In this paper, we introduce *Scalable Offline Reinforcement Learning* (<code style="color: #4bacc6;">SORL</code>), a new offline RL algorithm that leverages shortcut models – a novel class of generative models – to scale both training and inference. <code style="color: #4bacc6;">SORL</code>'s policy can capture complex data distributions and can be trained simply and efficiently in a one-stage training procedure. At test time, <code style="color: #4bacc6;">SORL</code> introduces both sequential and parallel inference scaling by using the learned Q-function as a verifier. We demonstrate that <code style="color: #4bacc6;">SORL</code> achieves strong performance across a range of offline RL tasks and exhibits positive scaling behavior with increased test-time compute.

[**Efficient Imitation Under Misspecification**](https://arxiv.org/abs/2503.13162)  
    [**Nicolas Espinosa Dice**](https://nico-espinosadice.github.io/),
    [Sanjiban Choudhury](https://www.sanjibanchoudhury.com/),
    [Wen Sun](https://wensun.github.io/), 
    [Gokul Swamy](https://gokul.dev/)  
    *ICLR 2025*  
    [Paper](https://arxiv.org/abs/2503.13162) | 
    [Code](https://github.com/nico-espinosadice/garage-fork/tree/main) | 
    [Thread](https://x.com/nico_espinosa_d/status/1909315605154742715)  
    We consider the problem of imitation learning under *misspecification*: settings where the learner is fundamentally unable to replicate expert behavior. Building on prior work in *efficient inverse reinforcement learning* through computationally efficient *local search* procedures, we first prove that under a novel structural condition we term *reward-agnostic policy completeness*, these sorts of local-search based IRL algorithms are able to avoid compounding errors, even in the misspecified setting. We then consider the question of *where* we should perform local search in the first place, given the learner may not be able to "walk on a tightrope" as well as the expert in the misspecified setting. We prove that in the misspecified setting, it is beneficial to *broaden* the set of states on which local search is performed to include states reachable by good policies that the learner can actually play. We then experimentally explore a variety of sources of misspecification and how *offline* data can be used to effectively broaden where we perform local search from.


[**Efficient Inverse Reinforcement Learning Without Compounding Errors**](https://nico-espinosadice.github.io/efficient-IRL/)  
    [**Nicolas Espinosa Dice**](https://nico-espinosadice.github.io/),
    [Gokul Swamy](https://gokul.dev/),
    [Sanjiban Choudhury](https://www.sanjibanchoudhury.com/),
    [Wen Sun](https://wensun.github.io/)  
    *RLC 2024 RLSW, RLBRew*  
    [Paper](https://nico-espinosadice.github.io/efficient-IRL/static/efficient-irl.pdf) |
    [Code](https://github.com/nico-espinosadice/garage-fork/tree/main) |
    [Project Page](https://nico-espinosadice.github.io/compounding-errors-in-IRL/)  
    There are two seemingly contradictory desiderata for IRL algorithms: (a) preventing the compounding errors that stymie offline approaches like behavioral cloning and (b) avoiding the worst-case exploration complexity of reinforcement learning (RL). Prior work has been able to achieve either (a) or (b) but not both simultaneously. We prove that, under a novel structural condition we term reward-agnostic policy completeness, efficient IRL algorithms do avoid compounding errors, giving us the best of both worlds.

