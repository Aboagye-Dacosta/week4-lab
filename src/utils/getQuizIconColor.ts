export function getQuizIconColor(quizTitle: string) {
    quizTitle = quizTitle.toUpperCase();

    switch (quizTitle) {
        case "HTML":
            return "red"
        case "CSS":
            return "green"
        case "JAVASCRIPT":
            return "blue"
        default:
            return "brand"
    }
}