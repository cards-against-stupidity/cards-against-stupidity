package org.wcci.cardsagainststupidity.storage;

import org.springframework.stereotype.Service;
import org.wcci.cardsagainststupidity.models.Deck;
import org.wcci.cardsagainststupidity.models.Topic;
import org.wcci.cardsagainststupidity.storage.repositories.TopicRepository;

import java.util.Collection;
import java.util.Optional;

@Service
public class TopicJPA implements TopicStorage {
    
    private TopicRepository topicRepository;
    
    public TopicJPA(TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }
    
    @Override
    public Optional<Topic> findById(Long id) {
        return topicRepository.findById(id);
    }
    
    @Override
    public Optional<Topic> findTopicByTitle(String title) {
        return topicRepository.findTopicByTitle(title);
    }

    @Override
    public Collection<Topic> findAllTopics() {
        return (Collection<Topic>) topicRepository.findAll();
    }

    @Override
    public void save(Topic topic) {
        topicRepository.save(topic);
    }

    @Override
    public void delete(Long id) {
        topicRepository.deleteById(id);

    }


}
