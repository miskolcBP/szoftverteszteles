package com.example;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;

public class ExchangeRateServiceTest {
    @Test
    void getExchangeRate() {        
        ExchangeRateService rateService = mock(ExchangeRateService.class);
    
        when(rateService.getRate("EUR", "HUF")).thenReturn(400.0);
    }
}
