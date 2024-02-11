from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Set your OpenAI API key
api_key = "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"
openai.api_key = api_key

def get_hotel_suggestion(prompt):
    try:
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=200
        )
        hotel_suggestion = response.choices[0].text.strip()        
        return hotel_suggestion
    except Exception as e:
        print("Error:", e)
        return None

@app.route('/generate-itinerary', methods=['POST'])
def generate_itinerary():
    data = request.get_json()
    destination = data.get('destination')
    num_days = int(data.get('num_days'))
    accommodation_type = data.get('accommodation_type')
    activities = data.get('activities')
    budget = int(data.get('budget'))

    # Generate hotel prompt
    hotel_prompt = f"Please suggest a {accommodation_type} hotel in {destination} within a total budget of {budget} INR for the entire trip."
    hotel_suggestion = get_hotel_suggestion(hotel_prompt)

    # Generate itinerary
    itinerary = f"Generated Itinerary for {num_days} Days in {destination}:\n\n"
    for day in range(1, num_days + 1):
        activities_prompt = f"What are the top activities to do in {destination} for someone interested in {activities}?"
        hotel_suggestion = get_hotel_suggestion(activities_prompt)

        itinerary += f"Day {day}: {destination}\n"
        itinerary += f"- Explore {destination}:\n{hotel_suggestion}\n\n"

    return jsonify({'itinerary': itinerary, 'hotel_suggestion': hotel_suggestion})

if __name__ == '__main__':
    app.run(debug=True)