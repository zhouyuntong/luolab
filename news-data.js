// 课题组动态统一数据：每条 date 填写 YYYY-MM。首页显示最新 5 条，归档页按年份筛选。
const groupNewsData = [
  {
    "id": "tellurium-prb",
    "category": "research",
    "date": "2026-10",
    "dateLabel": {
      "zh": "10月",
      "en": "OCT"
    },
    "type": {
      "zh": "科研进展",
      "en": "Research"
    },
    "title": {
      "zh": "手性碲中的整数量子铁电性研究发表于 Physical Review B",
      "en": "Integer quantum ferroelectricity in chiral tellurium published in Physical Review B"
    },
    "summary": {
      "zh": "论文于2026年10月发表，提出Ⅱ型整数量子铁电性，并揭示其在手性碲中的实现机制。罗伟老师为共同第一作者。",
      "en": "Published on October 2026, the paper proposes type-II integer quantum ferroelectricity and demonstrates its realization in chiral tellurium. Wei Luo is a co-first author."
    },
    "link": {
      "url": "https://journals.aps.org/prb/abstract/10.1103/qr2w-kfc6",
      "external": true,
      "label": {
        "zh": "查看论文 ↗",
        "en": "Read the Paper ↗"
      }
    }
  },
  {
    "id": "ai-project-award",
    "category": "research",
    "date": "2026-08",
    "dateLabel": {
      "zh": "08月",
      "en": "AUG"
    },
    "type": {
      "zh": "项目获批",
      "en": "Project Award"
    },
    "title": {
      "zh": "参与的新一代人工智能国家科技重大专项项目获批",
      "en": "Project under the National Science and Technology Major Project for New-Generation Artificial Intelligence approved"
    },
    "summary": {
      "zh": "课题组参与的新一代人工智能国家科技重大专项项目获批。罗伟老师作为研究骨干参与，负责经费60万元。",
      "en": "A project in which the group participates has been approved under the National Science and Technology Major Project for New-Generation Artificial Intelligence. Wei Luo participates as a key researcher and is responsible for RMB 600,000 in funding."
    }
  },
  {
    "id": "graduate-students",
    "category": "group",
    "date": "2026-08",
    "dateLabel": {
      "zh": "08月",
      "en": "AUG"
    },
    "type": {
      "zh": "团队动态",
      "en": "Group News"
    },
    "title": {
      "zh": "两位研究生加入课题组",
      "en": "Two graduate students join the group"
    },
    "summary": {
      "zh": "2026年8月，研究生周运通、黄文烽加入课题组。欢迎两位同学！",
      "en": "Graduate students Zhou Yuntong and Huang Wenfeng joined the group in August 2026. Welcome to the group!"
    },
    "link": {
      "url": "members.html",
      "external": false,
      "label": {
        "zh": "认识团队成员 →",
        "en": "Meet the Group →"
      }
    }
  },
  {
    "id": "pi-joins-suat",
    "category": "group",
    "date": "2026-06",
    "dateLabel": {
      "zh": "06月",
      "en": "JUN"
    },
    "type": {
      "zh": "团队动态",
      "en": "Group News"
    },
    "title": {
      "zh": "罗伟老师加入深圳理工大学",
      "en": "Wei Luo joins Shenzhen University of Advanced Technology"
    },
    "summary": {
      "zh": "罗伟老师于2026年6月入职深圳理工大学材料科学与能源工程学院，开展铁性与拓扑量子材料的理论研究。",
      "en": "Wei Luo joined the School of Materials Science and Energy Engineering at SUAT in June 2026 to pursue theoretical research on ferroic and topological quantum materials."
    },
    "link": {
      "url": "https://msee.suat-sz.edu.cn/info/1010/1382.htm",
      "external": true,
      "label": {
        "zh": "查看详情 ↗",
        "en": "Read More ↗"
      }
    }
  },
  {
    "id": "batis3-prb",
    "category": "research",
    "date": "2026-03",
    "dateLabel": {
      "zh": "03月",
      "en": "MAR"
    },
    "type": {
      "zh": "科研进展",
      "en": "Research"
    },
    "title": {
      "zh": "BaTiS₃ 应变诱导旋光效应研究发表于 Physical Review B",
      "en": "Strain-induced gyrotropic effects in BaTiS₃ published in Physical Review B"
    },
    "summary": {
      "zh": "论文于 2026 年 3 月发表，并被选为 Editors’ Suggestion。",
      "en": "Published on March 2026 and selected as an Editors’ Suggestion."
    },
    "link": {
      "url": "https://journals.aps.org/prb/abstract/10.1103/zk45-6lb2",
      "external": true,
      "label": {
        "zh": "查看详情 ↗",
        "en": "Read More ↗"
      }
    }
  }
];
