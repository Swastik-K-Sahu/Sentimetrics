package com.example.sentiment.service;

import com.example.sentiment.model.SentimentResult;
import com.example.sentiment.repository.SentimentRepository;
import com.example.sentiment.util.SentimentAnalyzer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SentimentService {

    @Autowired
    private SentimentRepository sentimentRepository;

    private final SentimentAnalyzer sentimentAnalyzer = new SentimentAnalyzer();

    public SentimentResult analyzeAndSaveSentiment(String text) {
        SentimentResult result = sentimentAnalyzer.analyze(text);
        result.setText(text);  // Store the original text along with the analysis result
        sentimentRepository.save(result);  // Save the result in MongoDB
        return result;
    }

    public List<SentimentResult> getSentimentHistory() {
        return sentimentRepository.findAll();  // Retrieve all sentiment results
    }
}
