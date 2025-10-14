+++
title = 'Home'
draft = false
+++

<div style="display: flex; align-items: center;">
    <img src="/nico.jpg" alt="Nicolas Espinosa Dice" style="width: 25%; margin-right: 20px;">
    <div>
        I am a third-year PhD student in Computer Science at <a href="https://cis.cornell.edu/">Cornell University</a>, where I am advised by <a href="https://wensun.github.io/">Wen Sun</a> and supported by the <a href="https://nsfgrfp.org/">NSF Graduate Research Fellowship Program</a> and the <a href="https://gradschool.cornell.edu/diversity-inclusion/signature-initiatives/graduate-school-deans-scholars/">Hopper-Dean and Bowers Fellowship</a>. My research interests are in reinforcement learning, imitation learning, and generative models. 
    </div>
</div>

My research focuses on how agents can learn from both interaction and offline data: what can we do *offline* (i.e. without interaction) to better learn/explore/fine-tune *online* (i.e. with interaction)? We've looked at [how to scale offline RL at test-time](https://arxiv.org/abs/2505.22866) by building agents with *flexible* inference-time compute budgets. We've also considered [how to do imitation learning in the misspecified setting](https://arxiv.org/abs/2503.13162) (i.e. when the expert policy is unrealizable, due to human/robot embodiment mismatches, distinct perception, etc). Currently, we're working on approaches to *efficiently* fine-tune large base policies (e.g. VLAs) in settings with *limited* online interaction. 

Prior to Cornell, I received a B.S. in Mathematics and Computer Science from [Harvey Mudd College](https://www.hmc.edu/), where I was advised by [George D. Montanez](https://www.cs.hmc.edu/~montanez/) and [Dagan Karp](https://www.math.hmc.edu/~dk/) and supported by the [Harvey S. Mudd Merit Award](https://www.hmc.edu/admission/afford/scholarships-and-grants/merit-based-scholarships/harvey-s-mudd-merit-award/). I worked with George D. Montanez in the [AMISTAD Lab](https://www.cs.hmc.edu/~montanez/amistad.html) on theoretical machine learning, receiving the [Computer Science Research Award](https://www.hmc.edu/cs/student-awards/) and [Clinic Program Individual Award](https://www.hmc.edu/cs/student-awards/). I later worked as a research scientist at [Dasion](https://data-to-decision.com/), advised by [Weiqing Gu](https://math.hmc.edu/gu/).

Last updated: October 2025

<center>

[CV](/CV.pdf) |
[Google Scholar](https://scholar.google.com/citations?user=yjPHHb8AAAAJ&hl=en) |
[Twitter/X](https://x.com/nico_espinosa_d) |
[Bluesky](https://bsky.app/profile/nico-espinosa-dice.bsky.social) |
[GitHub](https://github.com/nico-espinosadice) |
[LinkedIn](https://www.linkedin.com/in/nicolas-espinosa-dice/) |
[Email](mailto:ne229@cornell.edu)

</center>

## <span id="blog">Blog Posts</span>
[**Scaling Offline Reinforcement Learning at Test Time**](https://kempnerinstitute.harvard.edu/research/deeper-learning/scaling-offline-reinforcement-learning-at-test-time/)  
*Kempner Institute Deeper Learning Blog*  
We introduce a novel approach to scaling reinforcement learning (RL) during training and inference. Inspired by the recent work on LLM test-time scaling, we demonstrate how greater test-time compute can be leveraged to improve the performance of expressive, flow-based policies in RL.


## <span id="research">Research</span>
**[Expressive Value Learning for Scalable Offline Reinforcement Learning](https://arxiv.org/abs/2510.08218)**  
[**Nicolas Espinosa Dice**](https://nico-espinosadice.github.io/),
[Kianté Brantley](https://xkianteb.github.io/),
[Wen Sun](https://wensun.github.io/)  
*Pre-print*  
[Paper](https://arxiv.org/abs/2510.08218) | [Code](https://github.com/nico-espinosadice/expressive-value-learning) | [Project Page](/projects/evor) | Thread  
RL has yet to be fully leveraged in robotics, principally due to its lack of scalability. *Offline* RL offers a promising avenue by training agents on large, diverse datasets, avoiding the costly real-world interactions of *online* RL. Scaling offline RL to increasingly complex datasets requires expressive generative models such as diffusion and flow matching. However, existing methods typically depend on either backpropagation through time (BPTT), which is computationally prohibitive, or policy distillation, which limits scalability to larger base policies.
We consider the question of how to develop a scalable offline RL approach without relying on distillation or BPTT. We introduce *Expressive Value Learning for Scalable Offline RL* (<code style="color: #4bacc6;">EVOR</code>): a scalable offline RL approach that integrates *both* expressive policies *and* expressive value functions. <code style="color: #4bacc6;">EVOR</code> learns an optimal, regularized Q-function via flow matching during training. At inference-time, <code style="color: #4bacc6;">EVOR</code> performs inference-time policy extraction via rejection sampling against the expressive value function, enabling efficient optimization, regularization, and compute-scalable search *without retraining*. 

[**Scaling Offline RL via Efficient and Expressive Shortcut Models**](https://arxiv.org/abs/2505.22866)  
[**Nicolas Espinosa Dice**](https://nico-espinosadice.github.io/),
[Yiyi Zhang](https://www.linkedin.com/in/yiyi-zhang-8b673964/),
[Yiding Chen](https://chenyd.github.io/),
[Bradley Guo](https://www.linkedin.com/in/bradleyzguo),
[Owen Oertell](https://owenoertell.com/),
[Gokul Swamy](https://gokul.dev/),
[Kianté Brantley](https://xkianteb.github.io/),
[Wen Sun](https://wensun.github.io/)  
*NeurIPS 2025*  
[Paper](https://arxiv.org/abs/2505.22866) | [Code](https://github.com/nico-espinosadice/SORL) | [Project Page](/projects/sorl) | [Thread](https://x.com/nico_espinosa_d/status/1933209680609788170) | [Blog Post](https://kempnerinstitute.harvard.edu/research/deeper-learning/scaling-offline-reinforcement-learning-at-test-time/)  
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


[**Efficient Inverse Reinforcement Learning Without Compounding Errors**](https://rlbrew-workshop.github.io/papers/15_efficient_inverse_reinforcemen.pdf)  
    [**Nicolas Espinosa Dice**](https://nico-espinosadice.github.io/),
    [Gokul Swamy](https://gokul.dev/),
    [Sanjiban Choudhury](https://www.sanjibanchoudhury.com/),
    [Wen Sun](https://wensun.github.io/)  
    *RLC 2024 RLSW, RLBRew*  
    [Paper](https://rlbrew-workshop.github.io/papers/15_efficient_inverse_reinforcemen.pdf)  
    There are two seemingly contradictory desiderata for IRL algorithms: (a) preventing the compounding errors that stymie offline approaches like behavioral cloning and (b) avoiding the worst-case exploration complexity of reinforcement learning (RL). Prior work has been able to achieve either (a) or (b) but not both simultaneously. We prove that, under a novel structural condition we term reward-agnostic policy completeness, efficient IRL algorithms do avoid compounding errors, giving us the best of both worlds.

