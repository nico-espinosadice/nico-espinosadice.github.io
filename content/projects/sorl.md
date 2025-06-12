---
title: "Scaling Offline RL via Efficient and Expressive Shortcut Models"
# date: 2025-05-27
# layout: "single"
hide_title: true
hide_breadcrumbs: true
hide_site_title: true
---

<center>

<h1 style="text-align: center;">
  Scaling Offline RL via <br>
  Efficient and Expressive Shortcut Models
</h1>

**[Nicolas Espinosa Dice](https://nico-espinosadice.github.io/)<sup>1</sup>**,
**[Yiyi Zhang](https://www.linkedin.com/in/yiyi-zhang-8b673964/)<sup>1</sup>**,
**[Yiding Chen](https://chenyd.github.io/)<sup>1</sup>**,
**[Bradley Guo](https://www.linkedin.com/in/bradleyzguo)<sup>1</sup>**,
**[Owen Oertell](https://owenoertell.com/)<sup>1</sup>**,
**[Gokul Swamy](https://gokul.dev/)<sup>2</sup>**,
**[Kianté Brantley](https://xkianteb.github.io/)<sup>3</sup>**,
**[Wen Sun](https://wensun.github.io/)<sup>1</sup>**

<sup>1</sup>Cornell University,
<sup>2</sup>Carnegie Mellon University,
<sup>3</sup>Harvard University


[Paper](https://arxiv.org/abs/2505.22866) | [Code](https://github.com/nico-espinosadice/SORL) | [Thread](https://x.com/nico_espinosa_d/status/1933209680609788170)

</center>

## Abstract

Diffusion and flow models have emerged as powerful generative approaches capable of modeling diverse and multimodal behavior. However, applying these models to offline reinforcement learning (RL) remains challenging due to the iterative nature of their noise sampling processes, making policy optimization difficult. In this paper, we introduce *Scalable Offline Reinforcement Learning* (<code style="color: #4bacc6;">SORL</code>), a new offline RL algorithm that leverages shortcut models – a novel class of generative models – to scale both training and inference. <code style="color: #4bacc6;">SORL</code>'s policy can capture complex data distributions and can be trained simply and efficiently in a one-stage training procedure. At test time, <code style="color: #4bacc6;">SORL</code> introduces both sequential and parallel inference scaling by using the learned Q-function as a verifier. We demonstrate that <code style="color: #4bacc6;">SORL</code> achieves strong performance across a range of offline RL tasks and exhibits positive scaling behavior with increased test-time compute.

<!-- ## Highlights

- 🎯 Clear bullet points summarizing your method
- 🚀 Performance benchmarks or contributions
- 🤖 Key methods or novelties -->

<!-- ## Method Figure

![Overview Figure](images/neurips2025/method.png)

*Caption for the figure, if needed.* -->

<!-- ## Citation

```bibtex
@inproceedings{your2025paper,
  title     = {Your Paper Title},
  author    = {Your Name and Coauthor},
  booktitle = {NeurIPS},
  year      = {2025}
} -->
