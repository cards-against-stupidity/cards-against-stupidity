package org.wcci.cardsagainststupidity.controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.cardsagainststupidity.models.Topic;
import org.wcci.cardsagainststupidity.storage.TopicStorage;

import java.util.Collection;

@RestController
@RequestMapping("topics")
public class TopicController {

    private TopicStorage topicStorage;

    public TopicController(TopicStorage topicStorage) {
        this.topicStorage = topicStorage;
    }

    @GetMapping
    public Collection<Topic> allTopics() {
        return topicStorage.findAllTopics();
    }

    @GetMapping("/{title}")
    public Topic topicByTitle(@PathVariable String title) {
        return topicStorage.findTopicByTitle(title).orElse(null);
    }

    @GetMapping("/id/{id}")
    public Topic topicById(@PathVariable Long id) {
        return topicStorage.findById(id).orElse(null);
    }

    @PutMapping("/create-topic")
    public Collection<Topic> createTopic(@RequestBody Topic topicToAdd) {
        topicStorage.save(topicToAdd);
        return topicStorage.findAllTopics();
    }

    @DeleteMapping("/delete")
    public Collection<Topic> deleteTopic(@RequestParam Long id) {
        topicStorage.delete(id);
        return topicStorage.findAllTopics();
    }

}
