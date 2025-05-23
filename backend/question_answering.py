from langchain_community.llms import HuggingFacePipeline
from transformers import pipeline

def answer_query(question, vectorstore):
    # Retrieve relevant documents
    docs = vectorstore.similarity_search(question, k=2)
    context = " ".join([doc.page_content for doc in docs])
    print("Retrieved context:", context)  # Debug log to inspect context

    # Initialize T5 model
    model = pipeline("text2text-generation", model="t5-small", max_length=512)
    prompt = f"Generate answer: {question}\nContext: {context}\nExplanation:"
    answer = model(prompt, max_length=512, min_length=50)[0]["generated_text"]
    print("Generated answer:", answer)  # Debug log to inspect answer
    return answer