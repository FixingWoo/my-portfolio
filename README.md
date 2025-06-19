## 적용된 디자인 패턴

### 1. Atomic Design

컴포넌트를 Atomic Design 원칙에 따라 `Atoms`, `Molecules`, `Organisms`, `Templates`, `Pages`로 계층화하여 UI의 재사용성과 유지보수성을 극대화했습니다.

### 2. Forward Ref Pattern

[`React.forwardRef`](https://react.dev/reference/react/forwardRef)를 사용하여 하위 컴포넌트에서 상위로 `ref`를 전달할 수 있도록 구성했습니다. 외부에서 DOM 요소 접근 및 포커싱, 애니메이션 제어 등에 활용됩니다.

### 3. Custom Utility Function Pattern

클래스 이름을 props 기반으로 동적으로 생성하는 유틸리티 함수들을 통해 디자인 토큰 기반 스타일을 손쉽게 적용할 수 있게 했습니다.

### 4. Props Composition Pattern (Flexible Props)

`SpacingProps`, `StyleProps`, `FlexProps` 등 역할별 스타일 props를 분리하고 조합하여 다양한 스타일링을 하나의 공통 컴포넌트에서 처리할 수 있도록 했습니다.

### 5. Polymorphic Component Pattern

`as` prop을 통해 하나의 컴포넌트가 다양한 HTML 태그 또는 컴포넌트로 렌더링될 수 있도록 구성했습니다. `div`, `a`, `Link`, `Flex` 등 자유롭게 전환 가능합니다.
