package com.example.sentiment.controller;

import com.example.sentiment.model.SentimentResult;
import com.example.sentiment.service.SentimentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/sentiment")
@CrossOrigin(origins = "http://localhost:5173")
public class SentimentController {

    @Autowired
    private SentimentService sentimentService;

    @PostMapping("/analyze")
    public SentimentResult analyzeSentiment(@RequestBody String text) {
        return sentimentService.analyzeAndSaveSentiment(text);
    }

    @PostMapping("/upload")
    public SentimentResult analyzeFile(@RequestParam("file") MultipartFile file) throws IOException {
        String content = new String(file.getBytes());
        return sentimentService.analyzeAndSaveSentiment(content);
    }

    @GetMapping("/history")
    public List<SentimentResult> getSentimentHistory() {
        return sentimentService.getSentimentHistory();
    }
}
