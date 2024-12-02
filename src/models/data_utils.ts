import data from "../data.json";

export const quizTopics = data.quizzes.map(quiz => ({ title: quiz.title, icon: quiz.icon }));

export const getQuizzesByTopic = (topic: string) => data.quizzes.filter(quiz => quiz.title.toUpperCase() == topic.toUpperCase());