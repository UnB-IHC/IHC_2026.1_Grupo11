# Introdução

Este documento apresenta as ferramentas utilizadas pelo Grupo 11 para avaliar a acessibilidade do site **Tela Brasil** (telabrasil.cultura.gov.br), a plataforma pública de streaming do audiovisual brasileiro.

## Objetivo

O objetivo é aplicar ferramentas consolidadas de avaliação de acessibilidade web para verificar a conformidade do site com as diretrizes da WCAG 2.2 e a eMAG, identificando problemas reais e propondo melhorias.

## Ferramentas selecionadas

A avaliação combina ferramentas automáticas com inspeção manual, garantindo uma análise abrangente:

| Ferramenta | Tipo | O que avalia |
|---|---|---|
| **WAVE** | Extensão Chrome (WebAIM) | Erros WCAG, contraste, estrutura HTML, ARIA |
| **ASES** | Site web (Gov. Federal) | Conformidade eMAG/WCAG |
| **Acess Monitor Plus** | Site web (Portugal) | Conformidade WCAG 2.1 (níveis A, AA, AAA) |
| **VLibras** | Extensão / Widget | Tradução de textos para Libras |
| **Lighthouse** | DevTools do Chrome | Pontuação 0–100 de acessibilidade |
| **Accessibility Insights** | Extensão Chrome (Microsoft) | FastPass automático + Tab Stops |

## Metodologia

Cada ferramenta foi executada sobre a página principal do site Tela Brasil. Os resultados foram documentados com capturas de tela, organizados em pontos positivos e problemas encontrados, e referenciados aos critérios da WCAG.

Nenhuma ferramenta automática é suficiente sozinha para avaliar completamente a acessibilidade de um site. Por isso, a análise foi complementada com testes manuais de navegação por teclado e avaliação funcional do widget Rybená integrado ao site.