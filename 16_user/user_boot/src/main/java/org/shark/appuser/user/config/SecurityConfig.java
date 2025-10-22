package org.shark.appuser.user.config;

import java.util.Arrays;

import org.shark.appuser.user.filter.JwtAuthenticationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
  
  private final JwtAuthenticationFilter jwtAuthenticationFilter;

  // 시큐리티 필터 체인 시스템
  @Bean
  SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    
    http
    
      // CSRF 비활성화
      .csrf(configurer -> configurer.disable())
      
      // 요청(주소)별 인증 설정
      .authorizeHttpRequests(auth -> auth
          // 인증 관련 엔드 포인트는 모든 사용자에게 허용
          .requestMatchers("/api/v1/auth/**").permitAll()
          // 나머지 모든 요청은 인증 필요
          .anyRequest().authenticated()
      )
      
      // 세션 설정 (JWT 사용 시 STATELESS로 설정)
      .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
      
      // CORS 설정
      .cors(configurer -> configurer.configurationSource(corsConfigurationSource()))
      
      // JwtAuthenticationFilter를 UsernamePasswordAuthenticationFilter 앞에 배치
      // UsernamePasswordAuthenticationFilter는 폼 로그인 시(POST /login) 사용하는 필터
      // JwtAuthenticationFilter가 먼저 동작하고 인증에 성공하면 UsernamePasswordAuthenticationFilter가 실행되지 않습니다.
      .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
    
    return http.build();
  }
  
  //----- CORS 설정
  @Bean
  CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration configuration = new CorsConfiguration();
    // React App 허용
    configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
    // HTTP 메소드 허용
    configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
    // 모든 헤더 허용
    configuration.setAllowedHeaders(Arrays.asList("*"));
    // 인증 정보 허용 (JWT 토큰)
    configuration.setAllowCredentials(true);
    // 모든 경로에 configuration 적용
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", configuration);
    // 반환
    return source;
  }
  
  //spring security가 지원하는 비밀번호 암호화
   @Bean
   PasswordEncoder passwordEncoder() {
     return new BCryptPasswordEncoder();
   }
  
}
