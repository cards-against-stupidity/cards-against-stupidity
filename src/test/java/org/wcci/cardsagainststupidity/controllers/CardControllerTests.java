package org.wcci.cardsagainststupidity.controllers;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.wcci.cardsagainststupidity.models.Card;
import org.wcci.cardsagainststupidity.models.Deck;
import org.wcci.cardsagainststupidity.storage.CardStorage;

import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class CardControllerTests {
    
    private CardController underTest;
    private CardStorage cardStorage;
    private MockMvc mockMvc;
    private Card testCard;
    
    @BeforeEach
    void setUp() {
        cardStorage = mock(CardStorage.class);
        underTest = new CardController(cardStorage);
        mockMvc = MockMvcBuilders.standaloneSetup(underTest).build();
        testCard = new Card("Test Term", "Test Definition");
    }
    
    @Test
    void shouldRetrieveCards() throws Exception {
        mockMvc.perform(get("/cards"))
                .andExpect(status().isOk());
        
        verify(cardStorage).findAllCards();
    }
    
    @Test
    void shouldRetrieveCardByTerm() throws Exception {
        when(cardStorage.findCardByTerm("Test Term")).thenReturn(Optional.of(testCard));
        
        mockMvc.perform(get("/cards/Test Term"))
                .andExpect(status().isOk());
        
        verify(cardStorage).findCardByTerm("Test Term");
    }
    
    @Test
    void shouldRetrieveCardById() throws Exception {
        when(cardStorage.findById(1L)).thenReturn(Optional.of(testCard));
        
        mockMvc.perform(get("/cards/id/1"))
                .andExpect(status().isOk());
        
        verify(cardStorage).findById(1L);
    }
    
    @Test
    void shouldCreateCard() throws Exception {
        mockMvc.perform(put("/cards/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{ \"term\": \"Test Term\", \"definition\": \"Test Definition\" }"))
                .andExpect(status().is2xxSuccessful());
        
        verify(cardStorage).save(testCard);
        
        verify(cardStorage).findAllCards();
    }
    
    @Test
    void shouldDeleteCard() throws Exception {
        mockMvc.perform(delete("/cards/delete")
        .param("id", "1"))
                .andExpect(status().is2xxSuccessful());
        
        verify(cardStorage).delete(1L);
        
        verify(cardStorage).findAllCards();
    }
}
