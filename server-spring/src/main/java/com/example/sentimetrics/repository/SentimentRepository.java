package com.example.sentiment.repository;

import com.example.sentiment.model.SentimentResult;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SentimentRepository extends MongoRepository<SentimentResult, String> {

}
