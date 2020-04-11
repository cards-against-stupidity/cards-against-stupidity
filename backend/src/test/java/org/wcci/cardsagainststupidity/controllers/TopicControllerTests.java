package org.wcci.cardsagainststupidity.controllers;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.wcci.cardsagainststupidity.models.Deck;
import org.wcci.cardsagainststupidity.models.Topic;
import org.wcci.cardsagainststupidity.storage.DeckStorage;
import org.wcci.cardsagainststupidity.storage.TopicStorage;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class TopicControllerTests {
    
    private TopicController underTest;
    private TopicStorage mockStorage;
    private DeckStorage mockDeckStorage;
    private MockMvc mockMvc;
    private Topic testTopic;
    
    @BeforeEach
    void setUp() {
        mockStorage = mock(TopicStorage.class);
        mockDeckStorage = mock(DeckStorage.class);
        underTest = new TopicController(mockStorage, mockDeckStorage);
        mockMvc = MockMvcBuilders.standaloneSetup(underTest).build();
        testTopic = new Topic("Test");
    }
    
    @Test
    void shouldRetrieveAllTopics() throws Exception {
        mockMvc.perform(get("/topics"))
                .andExpect(status().isOk());
        
        verify(mockStorage).findAllTopics();
    }
    
    @Test
    void shouldRetrieveTopicByTitle() throws Exception {
        when(mockStorage.findTopicByTitle("Test")).thenReturn(Optional.of(testTopic));
        
        mockMvc.perform(get("/topics/Test"))
                .andExpect(status().isOk());
        
        verify(mockStorage).findTopicByTitle("Test");
    }
    
    @Test
    void shouldRetrieveTopicById() throws Exception {
        when(mockStorage.findById(1L)).thenReturn(Optional.of(testTopic));
        
        mockMvc.perform(get("/topics/id/1"))
                .andExpect(status().isOk());
        
        verify(mockStorage).findById(1L);
    }
    
    @Test
    void shouldCreateTopic() throws Exception {
        mockMvc.perform(put("/topics/create-topic")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{ \"title\": \"Test\" }"))
                .andExpect(status().is2xxSuccessful());
        
        verify(mockStorage).save(testTopic);
        
        verify(mockStorage).findAllTopics();
    }
    
    @Test
    void shouldDeleteTopic() throws Exception {
        mockMvc.perform(delete("/topics/delete")
                .param("id", "1"))
                .andExpect(status().is2xxSuccessful());
        
        verify(mockStorage).delete(1L);
        
        verify(mockStorage).findAllTopics();
    }
    
    @Test
    void shouldAddDeckToTopic() throws Exception {
        when(mockStorage.findById(1L)).thenReturn(Optional.of(testTopic));
    
        Deck toAdd = new Deck("Test");
        
        mockMvc.perform(put("/topics/1/add-deck")
        .contentType(MediaType.APPLICATION_JSON)
        .content("{ \"title\": \"Test\" }"))
                .andExpect(status().is2xxSuccessful());
        
        verify(mockStorage).findById(1L);
        
        verify(mockStorage).findAllTopics();
        
        assertThat(testTopic.getDecks()).contains(toAdd);
    }
}
