import random

def generate_quiz_question(knowledge_base):
    article = random.choice(knowledge_base)
    question = f"What does {article['article_number']} define?"
    correct_answer = article["title"]
    wrong_answers = [a["title"] for a in random.sample(knowledge_base, 3) if a["title"] != correct_answer]
    options = wrong_answers + [correct_answer]
    random.shuffle(options)
    return {
        "question": question,
        "options": options,
        "correct": correct_answer
    }