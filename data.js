// Academic Data - Centralized data source for news and publications
const academicData = {
    news: [
        {
            date: "October 24, 2025",
            title: "WSDM Acceptance",
            content: 'The research paper <strong>"Towards Next-Generation Recommender Systems: A Benchmark for Personalized Recommendation Assistant with LLMs"</strong> is accepted by <strong>The 18th ACM International Conference on Web Search and Data Mining (WSDM \'25)</strong>.'
        },
        {
            date: "October 16, 2025",
            title: "TOIS Acceptance",
            content: 'The research paper <strong>"SSD4Rec: A Structured State Space Duality Model for Efficient Sequential Recommendation"</strong> is accepted by <strong>Transactions on Information Systems (TOIS)</strong>.'
        },
        {
            date: "June 11, 2025",
            title: "Commendable Reviewers",
            content: 'Recognized as the <strong>"Commendable Reviewers"</strong> in <strong>KDD25 (Feb Cycle)</strong>.'
        },
        {
            date: "May 17, 2025",
            title: "KDD 2025 Acceptance",
            content: 'Our tutorial and survey paper <strong>"A Survey of WebAgents: Towards Next-Generation AI Agents for Web Automation with Large Foundation Models"</strong> are accepted by <strong>ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD \'25)</strong>.'
        },
        {
            date: "April 25, 2025",
            title: "arXiv Paper Release",
            content: 'The paper <strong>"Exploring Backdoor Attack and Defense for LLM-empowered Recommendations"</strong> is released on <strong>arXiv</strong>.'
        },
        {
            date: "April 15, 2025",
            title: "IEEE TNNLS Acceptance",
            content: 'The paper <strong>"Multi-level Distribution Alignment for Multi-source Universal Domain Adaptation"</strong> is accepted by <strong>IEEE Transactions on Neural Networks and Learning Systems</strong>.'
        },
        {
            date: "April 10, 2025",
            title: "arXiv Paper Release",
            content: 'The paper <strong>"Retrieval-Augmented Purifier for Robust LLM-Empowered Recommendation"</strong> is released on <strong>arXiv</strong>.'
        },
        {
            date: "March 12, 2025",
            title: "Two New Papers Released",
            content: 'The benchmark paper <strong>"Towards Next-Generation Recommender Systems: A Benchmark for Personalized Recommendation Assistant with LLMs"</strong> and the survey paper <strong>"A Survey of WebAgents: Towards Next-Generation AI Agents for Web Automation with Large Foundation Models"</strong> are released on <strong>arXiv</strong>.'
        },
        {
            date: "August 8, 2024",
            title: "Mamba Survey Paper Released",
            content: 'The paper <strong>"A Survey of Mamba"</strong> is released on <strong>arXiv</strong>.'
        },
        {
            date: "May 17, 2024",
            title: "Two Papers Accepted by KDD 2024",
            content: 'Two papers <strong>"CheatAgent: Attacking LLM-Empowered Recommender Systems via LLM Agent"</strong> and <strong>"A Survey on RAG Meets LLMs: Towards Retrieval-Augmented Large Language Models"</strong> are accepted by <strong>ACM SIGKDD Conference on Knowledge Discovery and Data Mining</strong>.'
        },
        {
            date: "May 10, 2024",
            title: "Adversarial Perturbations Paper Released",
            content: 'The paper <strong>"Joint Universal Adversarial Perturbations with Interpretations"</strong> is released on <strong>arXiv</strong>.'
        },
        {
            date: "March 5, 2024",
            title: "Web Conference 2024 Acceptance",
            content: 'The paper <strong>"Interpretation-Empowered Neural Cleanse for Backdoor Attacks"</strong> is accepted by <strong>The Web Conference 2024</strong>.'
        },
        {
            date: "October 31, 2023",
            title: "Excellent Master's Thesis Award",
            content: 'Won the <strong>"Excellent Master\'s Thesis"</strong>.'
        },
        {
            date: "March 1, 2023",
            title: "Outstanding Graduates Award",
            content: 'Won the <strong>"Outstanding Graduates"</strong>.'
        },
        {
            date: "October 1, 2022",
            title: "National Scholarship Award",
            content: 'Won the <strong>"The National Scholarship"</strong>.'
        }
    ],
    
    publications: [
        {
            year: 2025,
            type: "conference",
            typeLabel: "Conference",
            title: "Towards Next-Generation Recommender Systems: A Benchmark for Personalized Recommendation Assistant with LLMs",
            authors: 'Jiani Huang, Shijie Wang, <strong>Liangbo Ning</strong>, Wenqi Fan, Shuaiqiang Wang, Dawei Yin, Qing Li',
            venue: "The 18th ACM International Conference on Web Search and Data Mining (WSDM '25)",
            links: [
                { type: "PDF", url: "https://arxiv.org/abs/2503.09382", class: "bg-primary" }
            ]
        },
        {
            year: 2025,
            type: "journal",
            typeLabel: "Journal",
            title: "SSD4Rec: A Structured State Space Duality Model for Efficient Sequential Recommendation",
            authors: 'Haohao Qu, Yifeng Zhang, <strong>Liangbo Ning</strong>, Wenqi Fan, Qing Li',
            venue: "Transactions on Information Systems (TOIS)",
            links: [
                { type: "PDF", url: "https://arxiv.org/abs/2409.01192", class: "bg-primary" }
            ]
        },
        {
            year: 2025,
            type: "conference",
            typeLabel: "Conference",
            title: "A Survey of WebAgents: Towards Next-Generation AI Agents for Web Automation with Large Foundation Models",
            authors: '<strong>Liangbo Ning</strong>, Ziran Liang, Zhuohang Jiang, Haohao Qu, Yujuan Ding, Wenqi Fan, Xiao-yong Wei, Shanru Lin, Hui Liu, Philip S. Yu, Qing Li',
            venue: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD '25)",
            links: [
                { type: "PDF", url: "https://arxiv.org/abs/2503.23350", class: "bg-primary" }
            ]
        },
        {
            year: 2025,
            type: "arxiv",
            typeLabel: "arXiv",
            title: "Exploring Backdoor Attack and Defense for LLM-empowered Recommendations",
            authors: '<strong>Liangbo Ning</strong>, Wenqi Fan, Qing Li',
            venue: "arXiv preprint",
            links: [
                { type: "PDF", url: "https://arxiv.org/abs/2504.11182", class: "bg-primary" }
            ]
        },
        {
            year: 2025,
            type: "journal",
            typeLabel: "Journal",
            title: "Multi-level Distribution Alignment for Multi-source Universal Domain Adaptation",
            authors: '<strong>Liangbo Ning</strong>, Zuowei Zhang, Weiping Ding, Dian Shao, Yining Zhu',
            venue: "IEEE Transactions on Neural Networks and Learning Systems",
            links: [
                { type: "PDF", url: "https://ieeexplore.ieee.org/document/10988896", class: "bg-primary" }
            ]
        },
        {
            year: 2025,
            type: "arxiv",
            typeLabel: "arXiv",
            title: "Retrieval-Augmented Purifier for Robust LLM-Empowered Recommendation",
            authors: '<strong>Liangbo Ning</strong>, Wenqi Fan, Qing Li',
            venue: "arXiv preprint",
            links: [
                { type: "PDF", url: "https://arxiv.org/abs/2504.02458", class: "bg-primary" }
            ]
        },
        {
            year: 2025,
            type: "journal",
            typeLabel: "Journal",
            title: "Belief-based Fuzzy and Imprecise Clustering for Arbitrary Data Distributions",
            authors: 'Zuo-wei Zhang, Zhun-ga Liu, <strong>Liangbo Ning</strong>, Hong-peng Tian, Bing-lu Wang',
            venue: "IEEE Transactions on Fuzzy Systems",
            links: [
                { type: "PDF", url: "https://ieeexplore.ieee.org/abstract/document/11023236", class: "bg-primary" }
            ]
        },
        {
            year: 2025,
            type: "arxiv",
            typeLabel: "arXiv",
            title: "mKG-RAG: Multimodal Knowledge Graph-Enhanced RAG for Visual Question Answering",
            authors: 'Xu Yuan, <strong>Liangbo Ning</strong>, Wenqi Fan, Qing Li',
            venue: "arXiv preprint",
            links: [
                { type: "PDF", url: "https://arxiv.org/abs/2508.05318", class: "bg-primary" }
            ]
        },
        {
            year: 2025,
            type: "conference",
            typeLabel: "Conference",
            title: "Towards Retrieval-Augmented Large Language Models: Data Management and System Design",
            authors: 'Wenqi Fan, Pangjing Wu, Yujuan Ding, <strong>Liangbo Ning</strong>, Shijie Wang, Qing Li',
            venue: "IEEE International Conference on Data Engineering (ICDE)",
            links: [
                { type: "PDF", url: "#", class: "bg-primary" }
            ]
        },
        {
            year: 2024,
            type: "conference",
            typeLabel: "Conference",
            title: "CheatAgent: Attacking LLM-Empowered Recommender Systems via LLM Agent",
            authors: '<strong>Liangbo Ning</strong>, Shijie Wang, Wenqi Fan, Qing Li, Xin Xu, Hao Chen, Feiran Huang',
            venue: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD '24)",
            links: [
                { type: "PDF", url: "https://dl.acm.org/doi/pdf/10.1145/3637528.3671837", class: "bg-primary" },
                { type: "Code", url: "https://github.com/Biglemon-Ning/CheatAgent", class: "bg-success" }
            ]
        },
        {
            year: 2024,
            type: "conference",
            typeLabel: "Conference",
            title: "A Survey on RAG Meets LLMs: Towards Retrieval-Augmented Large Language Models",
            authors: 'Yujuan Ding, Wenqi Fan, <strong>Liangbo Ning</strong>, Shijie Wang, Hengyun Li, Dawei Yin, Tat-Seng Chua, Qing Li',
            venue: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD '24)",
            links: [
                { type: "PDF", url: "https://dl.acm.org/doi/pdf/10.1145/3637528.3671470", class: "bg-primary" }
            ]
        },
        {
            year: 2024,
            type: "conference",
            typeLabel: "Conference",
            title: "Interpretation-Empowered Neural Cleanse for Backdoor Attacks",
            authors: '<strong>Liangbo Ning</strong>, Zeyu Dai, Jingran Su, Chao Pan, Luning Wang, Wenqi Fan, Qing Li',
            venue: "The Web Conference (WWW '24)",
            links: [
                { type: "PDF", url: "https://dl.acm.org/doi/abs/10.1145/3589335.3651525", class: "bg-primary" }
            ]
        },
        {
            year: 2024,
            type: "conference",
            typeLabel: "Conference",
            title: "Imprecise Deep Networks for Uncertain Image Classification",
            authors: 'Chuanqi Liu, Zuowei Zhang, Zechao Liu, <strong>Liangbo Ning</strong>, Zhunga Liu',
            venue: "International Conference on Belief Functions",
            links: [
                { type: "PDF", url: "https://link.springer.com/chapter/10.1007/978-3-031-67977-3_3", class: "bg-primary" }
            ]
        },
        {
            year: 2024,
            type: "arxiv",
            typeLabel: "arXiv",
            title: "A Survey of Mamba",
            authors: 'Haohao Qu, <strong>Liangbo Ning</strong>, Rui An, Wenqi Fan, Tyler Derr, Hui Liu, Xin Xu, Qing Li',
            venue: "arXiv preprint",
            links: [
                { type: "PDF", url: "https://arxiv.org/abs/2408.01129", class: "bg-primary" }
            ]
        },
        {
            year: 2024,
            type: "arxiv",
            typeLabel: "arXiv",
            title: "Joint Universal Adversarial Perturbations with Interpretations",
            authors: '<strong>Liangbo Ning</strong>, Zeyu Dai, Wenqi Fan, Jingran Su, Chao Pan, Luning Wang, Qing Li',
            venue: "arXiv preprint",
            links: [
                { type: "PDF", url: "https://arxiv.org/abs/2408.01715", class: "bg-primary" }
            ]
        },
        {
            year: 2023,
            type: "journal",
            typeLabel: "Journal",
            title: "Mining and Reasoning of Data Uncertainty-induced Imprecision in Deep Image Classification",
            authors: 'Zuo-wei Zhang, <strong>Liangbo Ning</strong>, Ze-chao Liu, et al.',
            venue: "Information Fusion",
            links: [
                { type: "PDF", url: "https://www.sciencedirect.com/science/article/abs/pii/S1566253523001033", class: "bg-primary" }
            ]
        },
        {
            year: 2023,
            type: "journal",
            typeLabel: "Journal",
            title: "Representation of Imprecision in Deep Neural Networks for Image Classification",
            authors: 'Zuowei Zhang, Zhunga Liu, <strong>Liangbo Ning</strong>, Arnaud Martin, Jiexuan Xiong',
            venue: "IEEE Transactions on Neural Networks and Learning Systems",
            links: [
                { type: "PDF", url: "https://ieeexplore.ieee.org/abstract/document/10314535", class: "bg-primary" }
            ]
        },
        {
            year: 2023,
            type: "journal",
            typeLabel: "Journal",
            title: "Unsupervised Change Detection from Heterogeneous Data Based on Image Translation",
            authors: 'Zhun-Ga Liu, Zuo-Wei Zhang, Quan Pan, <strong>Liang-Bo Ning</strong>',
            venue: "IEEE Transactions on Geoscience and Remote Sensing",
            links: [
                { type: "PDF", url: "https://ieeexplore.ieee.org/abstract/document/9497508", class: "bg-primary" }
            ]
        },
        {
            year: 2022,
            type: "journal",
            typeLabel: "Journal",
            title: "A New Progressive Multisource Domain Adaptation Network with Weighted Decision Fusion",
            authors: 'Zhun-Ga Liu, <strong>Liang-Bo Ning</strong>, Zuo-Wei Zhang',
            venue: "IEEE Transactions on Neural Networks and Learning Systems",
            links: [
                { type: "PDF", url: "https://ieeexplore.ieee.org/abstract/document/9791487", class: "bg-primary" },
                { type: "Code", url: "https://github.com/Biglemon-Ning/PMSDAN", class: "bg-success" }
            ]
        },
        {
            year: 2021,
            type: "conference",
            typeLabel: "Conference",
            title: "Domain Adaptation Based Multi-Source Data Fusion for Pattern Classification",
            authors: '<strong>Liangbo Ning</strong>, Zhun-ga Liu, Zuo-wei Zhang',
            venue: "2021 CIE International Conference on Radar (Radar)",
            links: [
                { type: "PDF", url: "https://ieeexplore.ieee.org/abstract/document/10028310", class: "bg-primary" }
            ]
        }
    ]
};

