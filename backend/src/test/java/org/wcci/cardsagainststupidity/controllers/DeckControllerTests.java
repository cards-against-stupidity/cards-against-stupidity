package org.wcci.cardsagainststupidity.controllers;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.wcci.cardsagainststupidity.models.Card;
import org.wcci.cardsagainststupidity.models.Deck;
import org.wcci.cardsagainststupidity.storage.CardStorage;
import org.wcci.cardsagainststupidity.storage.DeckStorage;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class DeckControllerTests {
    
    private DeckController underTest;
    private DeckStorage mockStorage;
    private CardStorage mockCardStorage;
    private MockMvc mockMvc;
    private Deck testDeck;
    
    @BeforeEach
    void setUp() {
        mockStorage = mock(DeckStorage.class);
        mockCardStorage = mock(CardStorage.class);
        underTest = new DeckController(mockStorage, mockCardStorage);
        mockMvc = MockMvcBuilders.standaloneSetup(underTest).build();
        testDeck = new Deck("Test Deck");
    }
    
    @Test
    void shouldRetrieveDecks() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/decks")).andExpect(status().isOk());
        
        verify(mockStorage).findAllDecks();
    }
    
    @Test
    void shouldRetrieveDeckByTitle() throws Exception {
        when(mockStorage.findDeckByTitle("Test Deck")).thenReturn(Optional.of(testDeck));
        
        mockMvc.perform(MockMvcRequestBuilders.get("/decks/Test Deck")).andExpect(status().isOk());
        
        verify(mockStorage).findDeckByTitle("Test Deck");
    }
    
    @Test
    void shouldRetrieveDeckById() throws Exception {
        when(mockStorage.findById(1L)).thenReturn(Optional.of(testDeck));
        
        mockMvc.perform(MockMvcRequestBuilders.get("/decks/id/1")).andExpect(status().isOk());
        
        verify(mockStorage).findById(1L);
    }
    
    @Test
    void shouldAddNewDeck() throws Exception {
        Deck newDeck = new Deck("Test New Deck");
        
        mockMvc.perform(MockMvcRequestBuilders.put("/decks/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{ \"title\": \"Test New Deck\" }"))
                .andExpect(status().is2xxSuccessful());
        
        verify(mockStorage).save(newDeck);
        
        verify(mockStorage).findAllDecks();
    }
    
    @Test
    void shouldDeleteDeck() throws Exception {
        Deck toDelete = new Deck("Delete ME PLEASE");
        
        mockStorage.save(toDelete);
        
        mockMvc.perform(MockMvcRequestBuilders.delete("/decks/delete")
                .param("id", "1"))
                .andExpect(status().is2xxSuccessful());
        
        verify(mockStorage).delete(1L);
        verify(mockStorage).findAllDecks();
    }
    
    @Test
    void shouldAddCardToDeck() throws Exception {
        when(mockStorage.findById(1L)).thenReturn(Optional.of(testDeck));
        
        Card toAdd = new Card("Test", "Test");
        
        mockMvc.perform(MockMvcRequestBuilders.put("/decks/1/add-card")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{ \"term\": \"Test\", \"definition\": \"Test\" }"))
                .andExpect(status().is2xxSuccessful());
        
        verify(mockStorage).findById(1L);
        verify(mockStorage).findAllDecks();
        assertThat(testDeck.getCards()).contains(toAdd);
    }
}
