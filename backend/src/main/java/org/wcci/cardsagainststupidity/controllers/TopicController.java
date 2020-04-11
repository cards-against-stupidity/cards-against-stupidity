package org.wcci.cardsagainststupidity.controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.cardsagainststupidity.models.Deck;
import org.wcci.cardsagainststupidity.models.Topic;
import org.wcci.cardsagainststupidity.storage.DeckStorage;
import org.wcci.cardsagainststupidity.storage.TopicStorage;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("topics")
public class TopicController {

    private TopicStorage topicStorage;
    
    private final DeckStorage deckStorage;

    public TopicController(TopicStorage topicStorage, DeckStorage deckStorage) {
        this.topicStorage = topicStorage;
        this.deckStorage = deckStorage;
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
    
    @PutMapping("/{id}/add-deck")
    public Collection<Topic> addDeckToTopic(@PathVariable Long id, @RequestBody Deck deckToAdd) {
        Optional<Topic> topicOptional = topicStorage.findById(id);
        
        if (topicOptional.isPresent()) {
            Deck newDeck = new Deck(deckToAdd.getTitle(), topicOptional.get());
            
            
        }
    
        topicOptional.ifPresent(topic -> topic.getDecks().add(deckToAdd));
        
        return topicStorage.findAllTopics();
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
