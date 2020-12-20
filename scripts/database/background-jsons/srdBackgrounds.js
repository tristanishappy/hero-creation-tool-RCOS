backgrounds=[
    {
        "name": "Acolyte",
        "source": "PHB",
        "page": 127,
        "srd": true,
        "entries": [
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Skill Proficiencies",
                        "entry": "{@skill Insight}, {@skill Religion}"
                    },
                    {
                        "type": "item",
                        "name": "Languages",
                        "entry": "Two of your choice"
                    },
                    {
                        "type": "item",
                        "name": "Equipment",
                        "entry": "A {@item holy symbol|phb} (a gift to you when you entered the priesthood), a prayer {@item book|phb} or prayer wheel, 5 sticks of incense, vestments, a set of {@item common clothes|phb}, and a belt {@item pouch|phb} containing 15 gp"
                    }
                ]
            },
            {
                "name": "Feature: Shelter of the Faithful",
                "type": "entries",
                "entries": [
                    "As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.",
                    "You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple."
                ],
                "data": {
                    "isFeature": true
                }
            },
            {
                "name": "Suggested Characteristics",
                "type": "entries",
                "entries": [
                    "Acolytes are shaped by their experience in temples or other religious communities. Their study of the history and tenets of their faith and their relationships to temples, shrines, or hierarchies affect their mannerisms and ideals. Their flaws might be some hidden hypocrisy or heretical idea, or an ideal or bond taken to an extreme.",
                    {
                        "type": "table",
                        "colLabels": [
                            "d8",
                            "Personality Trait"
                        ],
                        "colStyles": [
                            "col-1 text-center",
                            "col-11"
                        ],
                        "rows": [
                            [
                                "1",
                                "I idolize a particular hero of my faith, and constantly refer to that person's deeds and example."
                            ],
                            [
                                "2",
                                "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace."
                            ],
                            [
                                "3",
                                "I see omens in every event and action. The gods try to speak to us, we just need to listen."
                            ],
                            [
                                "4",
                                "Nothing can shake my optimistic attitude."
                            ],
                            [
                                "5",
                                "I quote (or misquote) sacred texts and proverbs in almost every situation."
                            ],
                            [
                                "6",
                                "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods."
                            ],
                            [
                                "7",
                                "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me."
                            ],
                            [
                                "8",
                                "I've spent so long in the temple that I have little practical experience dealing with people in the outside world."
                            ]
                        ]
                    },
                    {
                        "type": "table",
                        "colLabels": [
                            "d6",
                            "Ideal"
                        ],
                        "colStyles": [
                            "col-1 text-center",
                            "col-11"
                        ],
                        "rows": [
                            [
                                "1",
                                "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)"
                            ],
                            [
                                "2",
                                "Charity. I always try to help those in need, no matter what the personal cost. (Good)"
                            ],
                            [
                                "3",
                                "Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)"
                            ],
                            [
                                "4",
                                "Power. I hope to one day rise to the top of my faith's religious hierarchy. (Lawful)"
                            ],
                            [
                                "5",
                                "Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)"
                            ],
                            [
                                "6",
                                "Aspiration. I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings. (Any)"
                            ]
                        ]
                    },
                    {
                        "type": "table",
                        "colLabels": [
                            "d6",
                            "Bond"
                        ],
                        "colStyles": [
                            "col-1 text-center",
                            "col-11"
                        ],
                        "rows": [
                            [
                                "1",
                                "I would die to recover an ancient relic of my faith that was lost long ago."
                            ],
                            [
                                "2",
                                "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic."
                            ],
                            [
                                "3",
                                "I owe my life to the priest who took me in when my parents died."
                            ],
                            [
                                "4",
                                "Everything I do is for the common people."
                            ],
                            [
                                "5",
                                "I will do anything to protect the temple where I served."
                            ],
                            [
                                "6",
                                "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."
                            ]
                        ]
                    },
                    {
                        "type": "table",
                        "colLabels": [
                            "d6",
                            "Flaw"
                        ],
                        "colStyles": [
                            "col-1 text-center",
                            "col-11"
                        ],
                        "rows": [
                            [
                                "1",
                                "I judge others harshly, and myself even more severely."
                            ],
                            [
                                "2",
                                "I put too much trust in those who wield power within my temple's hierarchy."
                            ],
                            [
                                "3",
                                "My piety sometimes leads me to blindly trust those that profess faith in my god."
                            ],
                            [
                                "4",
                                "I am inflexible in my thinking."
                            ],
                            [
                                "5",
                                "I am suspicious of strangers and expect the worst of them."
                            ],
                            [
                                "6",
                                "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."
                            ]
                        ]
                    }
                ]
            }
        ],
        "skillProficiencies": [
            {
                "insight": true,
                "religion": true
            }
        ],
        "languageProficiencies": [
            {
                "anyStandard": 2
            }
        ],
        "startingEquipment": [
            {
                "_": [
                    {
                        "item": "holy symbol|phb",
                        "displayName": "holy symbol (a gift to you when you entered the priesthood)"
                    },
                    {
                        "special": "sticks of incense",
                        "quantity": 5
                    },
                    {
                        "special": "vestments"
                    },
                    "common clothes|phb",
                    {
                        "item": "pouch|phb",
                        "containsValue": 1500
                    }
                ]
            },
            {
                "a": [
                    {
                        "item": "book|phb",
                        "displayName": "prayer book"
                    }
                ],
                "b": [
                    {
                        "special": "prayer wheel"
                    }
                ]
            }
        ]
    }
];


function getBackgrounds(){
    return backgrounds;
}