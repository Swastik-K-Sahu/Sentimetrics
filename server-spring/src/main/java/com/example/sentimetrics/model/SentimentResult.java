package com.example.sentiment.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sentiments")
public class SentimentResult {

    @Id
    private String id;
    private String text;
    private String sentiment;
    private double confidence;

    public SentimentResult() {}

    public SentimentResult(String text, String sentiment, double confidence) {
        this.text = text;
        this.sentiment = sentiment;
        this.confidence = confidence;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getSentiment() {
        return sentiment;
    }

    public void setSentiment(String sentiment) {
        this.sentiment = sentiment;
    }

    public double getConfidence() {
        return confidence;
    }

    public void setConfidence(double confidence) {
        this.confidence = confidence;
    }
}
