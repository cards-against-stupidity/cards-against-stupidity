package org.wcci.cardsagainststupidity;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.wcci.cardsagainststupidity.models.Card;
import org.wcci.cardsagainststupidity.models.Deck;
import org.wcci.cardsagainststupidity.models.Topic;
import org.wcci.cardsagainststupidity.storage.repositories.CardRepository;
import org.wcci.cardsagainststupidity.storage.repositories.DeckRepository;
import org.wcci.cardsagainststupidity.storage.repositories.TopicRepository;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class JPAWiringTest {
    
    @Autowired
    private CardRepository cardRepository;
    @Autowired
    private DeckRepository deckRepository;
    @Autowired
    private TopicRepository topicRepository;
    @Autowired
    private TestEntityManager testEntityManager;
    
    @Test
    void CardsShouldHaveDeck() {
        Deck testDeck = new Deck("Test");
        deckRepository.save(testDeck);
        
        Card testCard1 = new Card("Test1", "Test", testDeck);
        Card testCard2 = new Card("Test2", "Test", testDeck);
        cardRepository.save(testCard1);
        cardRepository.save(testCard2);
        
        testEntityManager.flush();
        testEntityManager.clear();
        
        Deck retDeck = deckRepository.findDeckByTitle("Test").get();
        Card retCard1 = cardRepository.findCardByTerm("Test1").get();
        Card retCard2 = cardRepository.findCardByTerm("Test2").get();
        
        assertThat(testDeck.getCards()).contains(retCard1, retCard2);
    }
    
    @Test
    void DecksShouldHaveTopic() {
        Topic testTopic = new Topic("Test Topic");
        topicRepository.save(testTopic);
        
        Deck testDeck1 = new Deck("Test1", testTopic);
        Deck testDeck2 = new Deck("Test2", testTopic);
        deckRepository.save(testDeck1);
        deckRepository.save(testDeck2);
        
        testEntityManager.flush();
        testEntityManager.clear();
        
        Topic retTopic = topicRepository.findTopicByTitle("Test Topic").get();
        Deck retDeck1 = deckRepository.findDeckByTitle("Test1").get();
        Deck retDeck2 = deckRepository.findDeckByTitle("Test2").get();
        
        assertThat(testTopic.getDecks()).contains(retDeck1, retDeck2);
    }
}
