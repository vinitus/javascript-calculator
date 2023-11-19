const clickDigitButtons = (digits = []) => {
  digits.forEach((digit) => {
    cy.get('.digit').contains(digit).click();
  });
};

describe('계산기 앱 테스트', () => {
  beforeEach('페이지 방문', () => {
    cy.visit('../../index.html');
  });

  it('디스플레이에 기본적으로 숫자 0이 표시된다.', () => {
    // querySelector 역할
    cy.get('#total').should('have.text', 0);
  });

  // 계산기에서 요구되는 것은 결국 결과값이 표시되어야한다.
  // 그 중에서도 가장 작은 단위인 1개의 숫자가 표시되는가
  it('1개의 숫자 버튼을 클릭하면 display에 숫자가 표시된다', () => {
    // contains()는 해당 문자열이 포함된 여러 HTML 요소 중 하나를 선택함
    // click은 해당 HTML 태그를 클릭처리
    clickDigitButtons(['1']);
    cy.get('#total').should('have.text', 1);
  });

  // 1개의 클릭보단 큰 단위인 2개의 클릭
  it('2개의 숫자 버튼을 클릭하면 display에 숫자가 표시된다', () => {
    clickDigitButtons(['1', '2']);
    cy.get('#total').should('have.text', 12);
  });

  // unknown의 영역 -> 3개까지 잘 작동될까?
  it('2개의 숫자 버튼을 클릭하면 display에 숫자가 표시된다', () => {
    clickDigitButtons(['1', '2', '4']);
    cy.get('#total').should('have.text', 124);
  });
});
