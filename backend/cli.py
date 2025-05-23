from knowledge_base import load_knowledge_base, setup_vectorstore
from question_answering import answer_query
from quiz_generator import generate_quiz_question

def main():
    kb = load_knowledge_base("knowledge_base.json")
    vectorstore = setup_vectorstore(kb)

    while True:
        print("\nEthiopian Law Trainer")
        print("1. Ask a question")
        print("2. Take a quiz")
        print("3. Exit")
        choice = input("Choose an option (1-3): ")

        if choice == "1":
            question = input("Enter your question: ")
            answer = answer_query(question, vectorstore)
            print(f"Answer: {answer}")
        elif choice == "2":
            quiz = generate_quiz_question(kb)
            print(f"\nQuestion: {quiz['question']}")
            for i, option in enumerate(quiz["options"], 1):
                print(f"{i}. {option}")
            answer = input("Choose an option (1-4): ")
            if quiz["options"][int(answer) - 1] == quiz["correct"]:
                print("Correct!")
            else:
                print(f"Incorrect. The correct answer is: {quiz['correct']}")
        elif choice == "3":
            break
        else:
            print("Invalid option.")

if __name__ == "__main__":
    main()