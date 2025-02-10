const testGroup: CardGroup = {
  groupId: 1,
  name: "Test Group",
  flashCards: [
    {
      cardId: 1,
      question: "Question 1",
      answer: "Answer 1",
      correct: 0,
      incorrect: 0,
      dateCreated: new Date(),
      groupId: 1,
    },
  ],
  percentMemorised: 0,
};

export const testData: AlarmData[] = [
  {
    time: new Date(new Date().toISOString().substr(0, 10) + "T09:00:00.000Z"),
    days: ["MTWTFSS"],
    group: testGroup,
    enabled: false,
  },
];

export type AlarmData = {
  time: Date;
  days: string[];
  group: CardGroup;
  enabled: boolean;
};

export type FlashCard = {
  cardId: number;
  question: string;
  answer: string;
  correct: number;
  incorrect: number;
  dateCreated: Date;
  groupId: number;
};

export type CardGroup = {
  groupId: number;
  name: string;
  flashCards: FlashCard[];
  percentMemorised: number;
};
